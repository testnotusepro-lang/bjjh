import React, { useState } from 'react';
import { UploadCloud, X, Film, Sparkles, AlertCircle } from 'lucide-react';
import { ViralClip } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomClips: (clips: ViralClip[]) => void;
}

export const VideoUploaderModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onAddCustomClips,
}) => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoTranscript, setVideoTranscript] = useState('');
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      if (!videoTitle) {
        setVideoTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    }
  };

  const handleAnalyze = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/custom-video-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoTitle: videoTitle || 'Classroom English Lecture',
          videoTranscript: videoTranscript || 'Teacher speaking Hindi and teaching English idioms with jokes.',
          videoDescription: selectedFileName ? `Uploaded video file: ${selectedFileName}` : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please check connection.');
      }

      const data = await response.json();
      if (data.clips && data.clips.length > 0) {
        const mappedClips: ViralClip[] = data.clips.map((c: any, idx: number) => ({
          id: `custom-clip-${Date.now()}-${idx}`,
          title: c.title || `Viral Shot #${idx + 1}`,
          hindiHook: c.killerHook || 'मजेदार अंदाज में अंग्रेजी सीखो! 😂',
          startSeconds: parseTimeToSeconds(c.inTime || '01:00'),
          endSeconds: parseTimeToSeconds(c.outTime || '01:45'),
          duration: Math.max(30, parseTimeToSeconds(c.outTime || '01:45') - parseTimeToSeconds(c.inTime || '01:00')),
          viralScore: c.viralRetentionScore || 96,
          laughterScore: 9,
          aggressionScore: 8,
          energyPace: 'High-Octane',
          viralTag: '🔥 AI Extracted Viral Shot',
          educationalType: 'Viral Idiom',
          targetConcept: c.educationalTopic || 'Spoken English Rule',
          hindiMeaning: c.hindiMeaning || 'अंग्रेजी में मजेदार नियम',
          grammarFormula: `Rule: ${c.educationalTopic || 'Key Formula'}`,
          exampleSentence: c.exampleSentence || 'He always sweeps little things under the rug.',
          humorContext: c.whyItGoesViral || 'High laughter and relatable Indian classroom humor.',
          teacherAction: 'सर ने मजेदार उदाहरण से समझाया!',
          subtitles: [
            { text: c.killerHook || 'ध्यान से सुनो और समझो!', startOffset: 0.5, duration: 3.0, highlight: true, emoji: '🔥' },
            { text: `इसका मतलब है: ${c.educationalTopic}`, startOffset: 4.0, duration: 3.5, highlight: true, emoji: '💡' },
            { text: c.exampleSentence || 'Example sentence in action!', startOffset: 8.0, duration: 4.0, highlight: false },
          ],
          soundCues: [
            { timeOffset: 0.2, type: 'whoosh', label: 'Hook Intro' },
            { timeOffset: 4.2, type: 'ding', label: 'Rule Ding' },
            { timeOffset: 8.5, type: 'laughter', label: 'Laugh Track' },
          ],
          youtubeKit: {
            title: `${c.title || c.educationalTopic} Meaning in Hindi 😂 #Shorts #English`,
            description: `Learn ${c.educationalTopic} with high energy Hindi explanation!\\n\\nTopic: ${c.educationalTopic}\\nHindi: ${c.hindiMeaning}\\n\\n#Shorts #LearnEnglish #EnglishInHindi`,
            tags: ['Shorts', 'EnglishSpeaking', 'LearnEnglish', 'GrammarTricks', 'FunnyTeacher'],
            pinnedComment: `👉 क्या आपने कभी ${c.educationalTopic} का इस्तेमाल किया है? नीचे कमेंट करें! 👇`,
            hookVariations: [
              { type: 'Roast Hook', text: c.killerHook || 'मजेदार अंदाज में अंग्रेजी सीखो! 😂🔥', ctrScore: 98 },
              { type: 'Curiosity Hook', text: `क्या आपको "${c.educationalTopic}" का सही मतलब पता है? 🤔`, ctrScore: 95 },
              { type: 'Family Relatable', text: 'हर भारतीय परिवार में ये स्थिति ज़रूर आती है! 😂', ctrScore: 96 },
              { type: 'Exam Challenge', text: 'Exam और Daily English का सबसे जरूरी नियम! 🎯', ctrScore: 94 },
            ],
          },
        }));

        onAddCustomClips(mappedClips);
        onClose();
      } else {
        throw new Error('No clips extracted. Please provide more transcript text.');
      }
    } catch (err: any) {
      setError(err.message || 'Error analyzing video');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Upload New Lecture Video</h2>
            <p className="text-xs text-slate-400">
              Drop any Hindi English teaching video to extract viral 30-45s shots
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl flex items-center gap-2 text-red-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Video File Dropzone */}
        <div className="relative border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-2xl p-6 text-center transition-colors bg-slate-950/40 cursor-pointer">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <Film className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          {selectedFileName ? (
            <p className="text-xs font-semibold text-amber-300">{selectedFileName}</p>
          ) : (
            <>
              <p className="text-xs font-semibold text-slate-200 mb-1">
                Click or drag & drop lecture video file
              </p>
              <p className="text-[11px] text-slate-500">MP4, WebM, MOV (any length)</p>
            </>
          )}
        </div>

        {/* Lecture Title Input */}
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1.5">
            Lesson Title / Topic
          </label>
          <input
            type="text"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            placeholder="e.g. Day 112: Tense Rules & Funny Idioms"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Transcript / Highlights Notes */}
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-1.5">
            Class Transcript or Key Moments (Optional)
          </label>
          <textarea
            value={videoTranscript}
            onChange={(e) => setVideoTranscript(e.target.value)}
            rows={3}
            placeholder="Paste snippets, joke topics, or idioms taught (helps AI detect peak laughter & grammar rules)..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Analyze Action */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAnalyze}
            disabled={isProcessing}
            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-transform active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
          >
            {isProcessing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>AI Detecting Viral Clips...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Extract Viral Shots</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

function parseTimeToSeconds(timeStr: string): number {
  if (!timeStr) return 0;
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}
