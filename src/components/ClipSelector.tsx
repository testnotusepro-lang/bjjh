import React from 'react';
import { ViralClip } from '../types';
import { Flame, Clock, Play, Laugh, Zap, CheckCircle2 } from 'lucide-react';

interface Props {
  clips: ViralClip[];
  selectedClipId: string;
  onSelectClip: (clip: ViralClip) => void;
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

export const ClipSelector: React.FC<Props> = ({
  clips,
  selectedClipId,
  onSelectClip,
  selectedFilter,
  onSelectFilter,
}) => {
  const filters = [
    '🔥 Top Viral Priority',
    '🥊 High-Energy Roast',
    '🤣 Peak Classroom Laughter',
    '⚡ Rapid Grammar Rules',
    '💡 Viral Idioms & Proverbs',
  ];

  const filteredClips = clips.filter((c) => {
    if (selectedFilter === '🔥 Top Viral Priority') return true;
    if (selectedFilter === '🥊 High-Energy Roast') return c.aggressionScore >= 9;
    if (selectedFilter === '🤣 Peak Classroom Laughter') return c.laughterScore === 10;
    if (selectedFilter === '⚡ Rapid Grammar Rules') return c.educationalType === 'Core Grammar Rule';
    if (selectedFilter === '💡 Viral Idioms & Proverbs') return c.educationalType === 'Viral Idiom' || c.educationalType === 'English Proverb';
    return true;
  });

  return (
    <div className="flex flex-col gap-4">
      {/* High-Retention Virality Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {filters.map((fil) => (
          <button
            key={fil}
            onClick={() => onSelectFilter(fil)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedFilter === fil
                ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-400'
                : 'bg-slate-800/80 hover:bg-slate-750 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            {fil}
          </button>
        ))}
      </div>

      {/* Grid of High-Retention Clips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredClips.map((clip) => {
          const isSelected = clip.id === selectedClipId;
          return (
            <div
              key={clip.id}
              onClick={() => onSelectClip(clip)}
              className={`group relative p-4 rounded-2xl cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-slate-900 border-amber-500 shadow-2xl ring-2 ring-amber-500/25'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              {/* Header Badges: Viral Score, Laugh Meter, Aggression Tag */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  <Flame className="w-3.5 h-3.5 fill-current text-red-400" />
                  <span>{clip.viralScore}% VIRAL</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/40">
                    <Laugh className="w-3 h-3" />
                    <span>{clip.laughterScore}/10 Laughs</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{clip.duration}s</span>
                  </div>
                </div>
              </div>

              {/* Title & Viral Tag */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {clip.title}
                </h3>
              </div>
              <span className="inline-block text-[10px] font-bold text-red-300 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/50 mb-2">
                {clip.viralTag}
              </span>

              {/* Hook Quote */}
              <p className="text-xs text-amber-100/90 font-medium line-clamp-2 mb-3 bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                "{clip.hindiHook}"
              </p>

              {/* Educational Takeaway Card */}
              <div className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-amber-400">
                    {clip.educationalType}
                  </span>
                  <span className="text-[10px] font-bold text-sky-400">
                    Pace: {clip.energyPace}
                  </span>
                </div>
                <div className="text-xs font-black text-white">
                  {clip.targetConcept}
                </div>
                <div className="text-[11px] text-slate-300 line-clamp-1">
                  🇮🇳 {clip.hindiMeaning}
                </div>
              </div>

              {/* Footer with Timestamp & Select Button */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
                <span className="font-mono text-slate-500">
                  {formatTimestamp(clip.startSeconds)} - {formatTimestamp(clip.endSeconds)}
                </span>
                <span className={`font-bold flex items-center gap-1 ${
                  isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-white'
                }`}>
                  {isSelected ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Loaded in Player</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>Select & Crop</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function formatTimestamp(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
