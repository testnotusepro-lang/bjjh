import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ViralClip, LayoutMode, SFXType } from '../types';
import { soundEffects } from '../utils/soundEffects';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Download,
  Sparkles,
  Upload,
  FileVideo,
  CheckCircle2,
  Scissors,
  Zap,
} from 'lucide-react';

interface Props {
  clip: ViralClip;
  layoutMode: LayoutMode;
  enabledSFX: Record<SFXType, boolean>;
  videoUrl: string | null;
  videoFileName: string | null;
  onSelectVideoFile: (file: File) => void;
  onExportComplete?: (clipTitle: string) => void;
  customHookText?: string;
  onTriggerFastAutoExport?: () => void;
}

export const SmartSplitShortsPlayer: React.FC<Props> = ({
  clip,
  layoutMode,
  enabledSFX,
  videoUrl,
  videoFileName,
  onSelectVideoFile,
  onExportComplete,
  customHookText,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // 0 to clip.duration
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.15); // Default to 1.15x viral high pace
  const [isMuted, setIsMuted] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportedVideoUrl, setExportedVideoUrl] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const playedCuesRef = useRef<Set<number>>(new Set());
  const animationFrameRef = useRef<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // When clip changes, seek video to clip.startSeconds
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    playedCuesRef.current.clear();
    setExportedVideoUrl(null);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = clip.startSeconds;
    }
  }, [clip.id, clip.startSeconds]);

  // Audio SFX trigger check
  const checkSoundCues = useCallback(
    (time: number) => {
      if (isMuted) return;
      clip.soundCues.forEach((cue, index) => {
        if (
          time >= cue.timeOffset &&
          time <= cue.timeOffset + 0.16 &&
          !playedCuesRef.current.has(index)
        ) {
          if (enabledSFX[cue.type]) {
            soundEffects.play(cue.type);
          }
          playedCuesRef.current.add(index);
        }
      });
    },
    [clip.soundCues, enabledSFX, isMuted]
  );

  // Main Canvas Frame Renderer
  const renderCanvas = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = 720;
      const height = 1280;

      // Clear canvas
      ctx.fillStyle = '#080C16';
      ctx.fillRect(0, 0, width, height);

      const video = videoRef.current;
      const hasRealVideo = video && video.readyState >= 2;

      // Active subtitle
      const currentSub = clip.subtitles.find(
        (s) => time >= s.startOffset && time < s.startOffset + s.duration
      );

      // Camera Punch Zoom calculation on punchlines (High-Pace Aggression)
      let zoomPunch = 1.0;
      const isPunch = clip.soundCues.some(
        (c) => (c.type === 'punch' || c.type === 'laughter') && Math.abs(time - c.timeOffset) < 0.6
      );
      if (isPunch) {
        zoomPunch = 1.12;
      }

      const topHeight = Math.floor(height * 0.52);
      const bottomY = topHeight;
      const bottomHeight = height - topHeight;

      if (hasRealVideo) {
        // ═══════════════════════════════════════════════════════════════
        // REAL VIDEO RENDERING (Cropping teacher & whiteboard in 9:16)
        // ═══════════════════════════════════════════════════════════════
        const vw = video.videoWidth || 1920;
        const vh = video.videoHeight || 1080;

        if (layoutMode === 'smart-split') {
          // ── TOP VIEWPORT: Crop Speaker on right side of 16:9 frame ──
          ctx.save();
          if (zoomPunch > 1.0) {
            ctx.translate(width * 0.5, topHeight * 0.5);
            ctx.scale(zoomPunch, zoomPunch);
            ctx.translate(-width * 0.5, -topHeight * 0.5);
          }

          // Teacher stands in the right 50% of the video
          const teacherCropX = vw * 0.46;
          const teacherCropY = 0;
          const teacherCropW = vw * 0.54;
          const teacherCropH = vh;

          ctx.drawImage(
            video,
            teacherCropX,
            teacherCropY,
            teacherCropW,
            teacherCropH,
            0,
            0,
            width,
            topHeight
          );
          ctx.restore();

          // ── BOTTOM VIEWPORT: Crop Lesson Whiteboard on left side ──
          const slideCropX = 0;
          const slideCropY = 0;
          const slideCropW = vw * 0.54;
          const slideCropH = vh;

          ctx.drawImage(
            video,
            slideCropX,
            slideCropY,
            slideCropW,
            slideCropH,
            0,
            bottomY,
            width,
            bottomHeight
          );

          // Subtle contrast scrim on lower half so overlays are crystal-clear
          const scrim = ctx.createLinearGradient(0, bottomY, 0, height);
          scrim.addColorStop(0, 'rgba(8, 12, 22, 0.45)');
          scrim.addColorStop(0.5, 'rgba(8, 12, 22, 0.7)');
          scrim.addColorStop(1, 'rgba(8, 12, 22, 0.95)');
          ctx.fillStyle = scrim;
          ctx.fillRect(0, bottomY, width, bottomHeight);

          // Electric dividing separator bar with waveform effect
          ctx.fillStyle = '#F59E0B';
          ctx.fillRect(0, topHeight - 3, width, 5);

          // Draw Educational HUD overlay on the lower viewport
          renderEducationalOverlay(ctx, width, height, bottomY, time, currentSub);
        } else if (layoutMode === 'speaker-focus') {
          // ── FULL VERTICAL CROP CENTERED ON TEACHER ──
          const cropW = vh * (9 / 16);
          const cropX = Math.min(vw - cropW, vw * 0.52);

          ctx.save();
          if (zoomPunch > 1.0) {
            ctx.translate(width * 0.5, height * 0.5);
            ctx.scale(zoomPunch, zoomPunch);
            ctx.translate(-width * 0.5, -height * 0.5);
          }
          ctx.drawImage(video, cropX, 0, cropW, vh, 0, 0, width, height);
          ctx.restore();

          // Dark gradient overlay at bottom for subtitles & rule card
          const bottomScrim = ctx.createLinearGradient(0, height * 0.6, 0, height);
          bottomScrim.addColorStop(0, 'rgba(0,0,0,0)');
          bottomScrim.addColorStop(0.5, 'rgba(0,0,0,0.8)');
          bottomScrim.addColorStop(1, 'rgba(0,0,0,0.98)');
          ctx.fillStyle = bottomScrim;
          ctx.fillRect(0, height * 0.6, width, height * 0.4);

          renderFloatingHUD(ctx, width, height, currentSub);
        } else {
          // ── SLIDE FOCUS WITH TEACHER PIP ──
          ctx.drawImage(video, 0, 0, vw, vh, 0, 40, width, Math.floor(width * (9 / 16)));

          ctx.fillStyle = '#0B0F19';
          ctx.fillRect(0, Math.floor(width * (9 / 16)) + 40, width, height);

          // Teacher in circular PiP
          const pipX = width - 110;
          const pipY = Math.floor(width * (9 / 16)) + 120;
          const pipRadius = 75;

          ctx.save();
          ctx.beginPath();
          ctx.arc(pipX, pipY, pipRadius, 0, Math.PI * 2);
          ctx.clip();
          const tCropX = vw * 0.5;
          ctx.drawImage(video, tCropX, 0, vw * 0.5, vh, pipX - pipRadius, pipY - pipRadius, pipRadius * 2, pipRadius * 2);
          ctx.restore();

          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(pipX, pipY, pipRadius, 0, Math.PI * 2);
          ctx.stroke();

          renderEducationalOverlay(ctx, width, height, Math.floor(width * (9 / 16)) + 40, time, currentSub);
        }

        // Live Speaker watermark
        ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
        ctx.beginPath();
        ctx.roundRect(width - 165, 24, 140, 28, 14);
        ctx.fill();
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.arc(width - 150, 38, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 11px monospace';
        ctx.fillText('⚡ 9:16 VIRAL CROP', width - 138, 42);
      } else {
        // ═══════════════════════════════════════════════════════════════
        // NO LOCAL VIDEO LOADED YET: Inviting Drag & Drop Upload State
        // ═══════════════════════════════════════════════════════════════
        renderVideoUploadPrompt(ctx, width, height, time);
      }

      // Progress bar at bottom
      const progress = Math.min(time / clip.duration, 1);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, height - 8, width, 8);
      ctx.fillStyle = '#EF4444';
      ctx.fillRect(0, height - 8, width * progress, 8);
    },
    [clip, layoutMode, customHookText]
  );

  // Render Educational HUD overlay on the lower viewport
  const renderEducationalOverlay = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    bottomY: number,
    time: number,
    currentSub: any
  ) => {
    // 1. Opening Hook Banner (First 4.2 seconds) with High-CTR Slogan
    const hookText = customHookText || clip.hindiHook;
    if (time <= 4.2) {
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.roundRect(24, bottomY + 16, width - 48, 60, 16);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 21px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🔥 ${hookText}`, width * 0.5, bottomY + 53);
      ctx.textAlign = 'left';
    }

    // 2. Educational Badge Tag (Grammar Rule / Idiom)
    const badgeY = time <= 4.2 ? bottomY + 90 : bottomY + 24;
    ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(24, badgeY, 210, 32, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`💡 ${clip.educationalType.toUpperCase()}`, 38, badgeY + 21);

    // 3. Big Target Concept (English Phrase / Idiom)
    const conceptY = badgeY + 68;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 38px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(clip.targetConcept, 26, conceptY);

    // 4. Hindi Equivalent (हिंदी अर्थ)
    const hindiY = conceptY + 38;
    ctx.fillStyle = '#38BDF8';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`🇮🇳 अर्थ: ${clip.hindiMeaning}`, 26, hindiY);

    // 5. Grammar Formula Cheat-Sheet Card
    const formulaY = hindiY + 22;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(24, formulaY, width - 48, 56, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#FCD34D';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('RULE / FORMULA:', 40, formulaY + 22);
    ctx.fillStyle = '#F1F5F9';
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(clip.grammarFormula, 40, formulaY + 44);

    // 6. Real-world Spoken Sentence Box
    const sentenceY = formulaY + 68;
    ctx.fillStyle = 'rgba(11, 15, 25, 0.95)';
    ctx.beginPath();
    ctx.roundRect(24, sentenceY, width - 48, 58, 12);
    ctx.fill();

    ctx.fillStyle = '#94A3B8';
    ctx.font = '11px monospace';
    ctx.fillText('🗣️ SPOKEN ENGLISH SENTENCE:', 40, sentenceY + 20);
    ctx.fillStyle = '#A7F3D0';
    ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`"${clip.exampleSentence}"`, 40, sentenceY + 44);

    // 7. Kinetic Caption Subtitle Display (Alex Hormozi style bold box at bottom)
    const captionY = height - 124;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.92)';
    ctx.beginPath();
    ctx.roundRect(20, captionY, width - 40, 92, 18);
    ctx.fill();
    ctx.strokeStyle = currentSub?.highlight ? '#F59E0B' : '#334155';
    ctx.lineWidth = currentSub?.highlight ? 3.5 : 1;
    ctx.stroke();

    if (currentSub) {
      // Emoji badge above subtitle if present
      if (currentSub.emoji) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '32px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(currentSub.emoji, width * 0.5, captionY - 10);
      }

      ctx.textAlign = 'center';
      ctx.font = '900 25px "Plus Jakarta Sans", sans-serif';
      ctx.shadowColor = currentSub.highlight ? 'rgba(245, 158, 11, 0.8)' : 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = currentSub.highlight ? 16 : 4;
      ctx.fillStyle = currentSub.highlight ? '#FEF08A' : '#FFFFFF';
      ctx.fillText(currentSub.text, width * 0.5, captionY + 54);
      ctx.shadowBlur = 0;
      ctx.textAlign = 'left';
    } else {
      ctx.textAlign = 'center';
      ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#64748B';
      ctx.fillText('... ध्यान से सुनो और बोलो ...', width * 0.5, captionY + 54);
      ctx.textAlign = 'left';
    }
  };

  // Floating HUD when in speaker-focus mode
  const renderFloatingHUD = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    currentSub: any
  ) => {
    const cardY = height - 260;
    ctx.fillStyle = 'rgba(11, 15, 25, 0.92)';
    ctx.beginPath();
    ctx.roundRect(24, cardY, width - 48, 220, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`💡 ${clip.targetConcept.toUpperCase()}`, 44, cardY + 36);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`🇮🇳 ${clip.hindiMeaning}`, 44, cardY + 72);

    ctx.fillStyle = '#FCD34D';
    ctx.font = '13px monospace';
    ctx.fillText(`Rule: ${clip.grammarFormula}`, 44, cardY + 104);

    if (currentSub) {
      ctx.fillStyle = '#FEF08A';
      ctx.font = '900 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`"${currentSub.text}"`, 44, cardY + 154);
    }
  };

  // When no video file has been selected yet
  const renderVideoUploadPrompt = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0F172A');
    grad.addColorStop(0.5, '#090D1A');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const cardY = height * 0.26;
    ctx.fillStyle = 'rgba(30, 41, 59, 0.6)';
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(36, cardY, width - 72, 440, 24);
    ctx.fill();
    ctx.stroke();

    // Icon circle
    ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
    ctx.beginPath();
    ctx.arc(width * 0.5, cardY + 90, 54, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#F59E0B';
    ctx.font = '900 44px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🎬', width * 0.5, cardY + 105);

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 25px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Select Your Video File', width * 0.5, cardY + 185);

    // Subtitle
    ctx.fillStyle = '#94A3B8';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Drop the Day 110 Lecture (.mp4 / .webm)', width * 0.5, cardY + 220);
    ctx.fillText('to cut & crop real vertical video footage', width * 0.5, cardY + 245);

    // Button graphic
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.roundRect(width * 0.5 - 130, cardY + 290, 260, 56, 16);
    ctx.fill();

    ctx.fillStyle = '#0F172A';
    ctx.font = '900 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Browse Video File', width * 0.5, cardY + 326);

    ctx.fillStyle = '#64748B';
    ctx.font = '13px monospace';
    ctx.fillText('Zero upload wait · Plays instantly in browser', width * 0.5, cardY + 385);
    ctx.textAlign = 'left';

    // Show preview of current clip metadata below
    const previewY = height - 330;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    ctx.beginPath();
    ctx.roundRect(28, previewY, width - 56, 290, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#EF4444';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`🔥 READY TO CUT & PUBLISH: ${clip.title}`, 46, previewY + 38);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(clip.targetConcept, 46, previewY + 78);

    ctx.fillStyle = '#38BDF8';
    ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`🇮🇳 ${clip.hindiMeaning}`, 46, previewY + 112);

    ctx.fillStyle = '#FCD34D';
    ctx.font = '14px monospace';
    ctx.fillText(`Formula: ${clip.grammarFormula}`, 46, previewY + 152);

    ctx.fillStyle = '#A7F3D0';
    ctx.font = 'italic 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`"${clip.exampleSentence}"`, 46, previewY + 196);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Timecode: ${formatSeconds(clip.startSeconds)} - ${formatSeconds(clip.endSeconds)} (${clip.duration}s)`, 46, previewY + 240);
  };

  // Main Animation / Playback Loop
  useEffect(() => {
    let active = true;

    const loop = () => {
      if (!active) return;

      if (isPlaying) {
        const video = videoRef.current;
        if (video && video.readyState >= 2) {
          const clipElapsed = video.currentTime - clip.startSeconds;
          if (clipElapsed >= clip.duration || video.ended) {
            setIsPlaying(false);
            video.pause();
            setCurrentTime(clip.duration);
          } else {
            const currentClipTime = Math.max(0, clipElapsed);
            setCurrentTime(currentClipTime);
            checkSoundCues(currentClipTime);
          }
        } else {
          // If no video element yet, advance timer for testing
          setCurrentTime((prev) => {
            const next = prev + 0.033 * playbackSpeed;
            if (next >= clip.duration) {
              setIsPlaying(false);
              return clip.duration;
            }
            checkSoundCues(next);
            return next;
          });
        }
      }

      renderCanvas(currentTime);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      active = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, clip.duration, clip.startSeconds, checkSoundCues, renderCanvas, currentTime]);

  // Play / Pause Handlers
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (currentTime >= clip.duration) {
      setCurrentTime(0);
      playedCuesRef.current.clear();
      if (video) {
        video.currentTime = clip.startSeconds;
      }
    }

    if (isPlaying) {
      setIsPlaying(false);
      if (video) video.pause();
    } else {
      setIsPlaying(true);
      if (video && video.readyState >= 2) {
        video.currentTime = clip.startSeconds + currentTime;
        video.playbackRate = playbackSpeed;
        video.play().catch((err) => console.warn('Video play error:', err));
      }
    }
  };

  const handleReplay = () => {
    setCurrentTime(0);
    playedCuesRef.current.clear();
    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = clip.startSeconds;
      video.playbackRate = playbackSpeed;
      video.play().catch((err) => console.warn('Video replay error:', err));
    }
  };

  // Video Export Handler using Canvas Stream & MediaRecorder
  const handleExport = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas) return;

    setIsExporting(true);
    setExportProgress(0);
    setIsPlaying(false);
    setCurrentTime(0);
    playedCuesRef.current.clear();
    recordedChunksRef.current = [];

    // Capture canvas video stream
    const canvasStream = canvas.captureStream(30);

    // Audio stream mixing
    let combinedStream = canvasStream;
    try {
      if (video && (video as any).captureStream) {
        const videoStream = (video as any).captureStream();
        const audioTracks = videoStream.getAudioTracks();
        if (audioTracks.length > 0) {
          canvasStream.addTrack(audioTracks[0]);
        }
      }
    } catch (e) {
      console.warn('Audio stream merge error:', e);
    }

    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm';
    }

    const recorder = new MediaRecorder(combinedStream, { mimeType });
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        recordedChunksRef.current.push(e.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setExportedVideoUrl(url);
      setIsExporting(false);
      onExportComplete?.(clip.title);
    };

    recorder.start(100);

    // Start video playback from startSeconds during export
    if (video && video.readyState >= 2) {
      video.currentTime = clip.startSeconds;
      video.play().catch(() => {});
    }

    // Precise rendering loop for the clip duration
    const totalDuration = clip.duration;
    const startTime = performance.now();

    const exportLoop = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      setCurrentTime(elapsed);
      renderCanvas(elapsed);
      checkSoundCues(elapsed);

      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setExportProgress(pct);

      if (elapsed < totalDuration) {
        requestAnimationFrame(exportLoop);
      } else {
        if (video) video.pause();
        recorder.stop();
      }
    };

    requestAnimationFrame(exportLoop);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onSelectVideoFile(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* Hidden HTML5 Video element for decoding footage */}
      <video
        ref={videoRef}
        src={videoUrl || undefined}
        playsInline
        muted={isMuted}
        onLoadedData={() => {
          setIsVideoReady(true);
          if (videoRef.current) {
            videoRef.current.currentTime = clip.startSeconds;
          }
        }}
        className="hidden"
      />

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelectVideoFile(file);
        }}
        className="hidden"
      />

      {/* 9:16 Smartphone Simulator Frame */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        className={`relative group p-3 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[44px] shadow-2xl border-4 transition-all max-w-[360px] w-full ${
          isDragOver ? 'border-amber-400 scale-[1.02]' : 'border-slate-700/60'
        }`}
      >
        {/* Notch / Speaker Ear piece */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-1 bg-slate-700 rounded-full" />
          <div className="w-2 h-2 ml-3 bg-slate-800 rounded-full" />
        </div>

        {/* 9:16 Canvas Viewport */}
        <div
          onClick={() => {
            if (!videoUrl) fileInputRef.current?.click();
          }}
          className="relative overflow-hidden rounded-[34px] aspect-[9/16] bg-black cursor-pointer shadow-inner"
        >
          <canvas
            ref={canvasRef}
            width={720}
            height={1280}
            className="w-full h-full object-cover"
          />

          {/* Exporting Progress Overlay */}
          {isExporting && (
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 z-30">
              <Sparkles className="w-10 h-10 text-amber-400 animate-spin mb-4" />
              <p className="text-white font-bold text-lg mb-1">Cutting & Rendering Short...</p>
              <p className="text-slate-400 text-xs text-center mb-4">
                Cropping 9:16 split-screen, teacher zoom, lesson HUD & sound effects
              </p>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-amber-500 to-red-500 h-full transition-all duration-100"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
              <span className="text-amber-400 font-mono text-sm mt-2">{exportProgress}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Video Source Status Pill */}
      <div className="flex items-center justify-between w-full max-w-[480px] px-3 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <FileVideo className="w-4 h-4 text-amber-400" />
          <span className="truncate max-w-[220px]">
            {videoFileName ? videoFileName : 'No video file loaded yet'}
          </span>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>{videoFileName ? 'Change Video' : 'Load Video (.mp4)'}</span>
        </button>
      </div>

      {/* Video Playback & Studio Trimmer Controls */}
      <div className="w-full max-w-[480px] bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
        {/* Scrubber Bar with Timecode */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-slate-400 tabular-nums">
            {formatSeconds(clip.startSeconds + currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={clip.duration}
            step={0.1}
            value={currentTime}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setCurrentTime(val);
              playedCuesRef.current.clear();
              if (videoRef.current) {
                videoRef.current.currentTime = clip.startSeconds + val;
              }
            }}
            className="flex-1 accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <span className="text-xs font-mono text-slate-400 tabular-nums">
            {formatSeconds(clip.startSeconds + clip.duration)}
          </span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between gap-3">
          {/* Play/Pause & Replay */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              disabled={isExporting}
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-transform active:scale-95 disabled:opacity-50"
              title={isPlaying ? 'Pause' : 'Play Preview'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <button
              onClick={handleReplay}
              disabled={isExporting}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Replay from clip start"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Selector (1.0x, 1.15x Viral, 1.25x Turbo) */}
          <div className="flex items-center bg-slate-800/80 rounded-xl p-1 border border-slate-700/60">
            {[1.0, 1.15, 1.25].map((spd) => (
              <button
                key={spd}
                onClick={() => {
                  setPlaybackSpeed(spd);
                  if (videoRef.current) {
                    videoRef.current.playbackRate = spd;
                  }
                }}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
                  playbackSpeed === spd
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd === 1.15 ? '1.15x' : spd === 1.25 ? '1.25x ⚡' : '1.0x'}
              </button>
            ))}
          </div>

          {/* Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2.5 rounded-xl border transition-colors ${
              isMuted
                ? 'bg-red-950/60 border-red-800 text-red-400'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isMuted ? 'Unmute Audio & SFX' : 'Mute Audio & SFX'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Cut & Export 9:16 Video Button */}
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50"
          >
            <Scissors className="w-4 h-4 text-slate-950" />
            <span>Cut 9:16 Clip</span>
          </button>
        </div>

        {/* Download ready link if rendered */}
        {exportedVideoUrl && (
          <div className="mt-4 p-3 bg-emerald-950/50 border border-emerald-600/40 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-bold">Clip Exported ({clip.duration}s)!</span>
            </div>
            <a
              href={exportedVideoUrl}
              download={`${clip.targetConcept.toLowerCase().replace(/\s+/g, '_')}_9x16_short.webm`}
              className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Video</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
