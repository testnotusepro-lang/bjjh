import React, { useState } from 'react';
import { ViralClip, HookVariation } from '../types';
import { Copy, Check, Youtube, Hash, MessageSquare, BookOpen, Flame, Zap, CheckCircle2 } from 'lucide-react';

interface Props {
  clip: ViralClip;
  onApplyHook?: (hookText: string) => void;
}

export const ShortsPublishingKit: React.FC<Props> = ({ clip, onApplyHook }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const allTagsString = clip.youtubeKit.tags.map((t) => `#${t}`).join(' ');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-500 fill-current" />
          <h2 className="text-sm font-black text-white">
            YouTube Shorts & Instagram Reels Virality Kit
          </h2>
        </div>
        <span className="text-[11px] font-black text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Zap className="w-3 h-3" />
          <span>Top Retention Ready</span>
        </span>
      </div>

      {/* 1. Viral Hook A/B Test Lab (4 Killing Hooks) */}
      <div className="p-3.5 bg-red-950/20 border border-red-500/30 rounded-xl space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-black text-red-400">
            <Flame className="w-4 h-4 fill-current" />
            <span>Killing Hook Variations (Pick One for Opening 3s)</span>
          </div>
          <span className="text-[10px] text-amber-300 font-mono font-bold">Tested for High Retention</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {clip.youtubeKit.hookVariations?.map((hook, idx) => (
            <div
              key={idx}
              onClick={() => onApplyHook?.(hook.text)}
              className="p-2.5 bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-amber-500/70 rounded-xl cursor-pointer transition-all space-y-1 group"
            >
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-bold text-amber-400">{hook.type}</span>
                <span className="font-mono text-emerald-400 font-black">{hook.ctrScore}% CTR</span>
              </div>
              <p className="text-xs text-white font-bold group-hover:text-amber-200 line-clamp-2">
                "{hook.text}"
              </p>
              <span className="text-[10px] text-slate-500 group-hover:text-amber-400 font-semibold block pt-0.5">
                Click to set as video banner →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Viral Hinglish Title */}
      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-black text-amber-400">Viral Click-Through Title</span>
          <button
            onClick={() => handleCopy(clip.youtubeKit.title, 'title')}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
          >
            {copiedKey === 'title' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Title</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xs font-bold text-white select-all">
          {clip.youtubeKit.title}
        </p>
      </div>

      {/* 3. Core Educational Takeaway HUD */}
      <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Mandatory Educational Value in this Short</span>
        </div>
        <div className="text-xs text-slate-300 space-y-1">
          <div>
            <span className="text-amber-400 font-bold">Concept: </span>
            <span className="text-white font-extrabold">{clip.targetConcept}</span>
          </div>
          <div>
            <span className="text-slate-400 font-bold">Hindi Meaning: </span>
            <span>{clip.hindiMeaning}</span>
          </div>
          <div>
            <span className="text-slate-400 font-bold">Grammar Formula / Rule: </span>
            <code className="text-amber-200 bg-slate-900 px-1.5 py-0.5 rounded text-[11px] font-mono">
              {clip.grammarFormula}
            </code>
          </div>
          <div>
            <span className="text-emerald-400 font-bold">Spoken Sentence: </span>
            <span className="italic font-semibold text-emerald-200">"{clip.exampleSentence}"</span>
          </div>
        </div>
      </div>

      {/* 4. Description & Timestamps */}
      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-slate-300">Optimized Description</span>
          <button
            onClick={() => handleCopy(clip.youtubeKit.description, 'desc')}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
          >
            {copiedKey === 'desc' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Description</span>
              </>
            )}
          </button>
        </div>
        <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap max-h-24 overflow-y-auto scrollbar-thin">
          {clip.youtubeKit.description}
        </pre>
      </div>

      {/* 5. Hashtags Row */}
      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Hash className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold text-slate-300">Viral Hashtags ({clip.youtubeKit.tags.length})</span>
          </div>
          <button
            onClick={() => handleCopy(allTagsString, 'tags')}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
          >
            {copiedKey === 'tags' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Tags</span>
              </>
            )}
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {clip.youtubeKit.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/40 border border-amber-900/50 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 6. Pinned Comment for Algorithm Boost */}
      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1 text-emerald-400 font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Algorithm Boost: Pinned Comment</span>
          </div>
          <button
            onClick={() => handleCopy(clip.youtubeKit.pinnedComment, 'comment')}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
          >
            {copiedKey === 'comment' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Comment</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-slate-300 italic">
          "{clip.youtubeKit.pinnedComment}"
        </p>
      </div>

      {/* Virality Checklist */}
      <div className="p-3 bg-slate-950/50 border border-slate-800/80 rounded-xl">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
          Viral Retention Audit (Passed 5/5)
        </span>
        <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300 font-medium">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Killer 0-3s Hook Banner</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>10/10 Relatable Laughter</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Solid English Grammar/Rule</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>30-45s Short Duration</span>
          </div>
        </div>
      </div>
    </div>
  );
};
