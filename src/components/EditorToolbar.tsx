import React, { useState } from 'react';
import { LayoutMode, SFXType, ViralClip } from '../types';
import {
  SplitSquareVertical,
  User,
  Tv,
  Volume2,
  Sparkles,
  Edit3,
  Check,
  RefreshCw,
  Bell,
  Laugh,
  Flame,
  Zap,
} from 'lucide-react';

interface Props {
  clip: ViralClip;
  layoutMode: LayoutMode;
  onChangeLayout: (mode: LayoutMode) => void;
  enabledSFX: Record<SFXType, boolean>;
  onToggleSFX: (type: SFXType) => void;
  customHook: string;
  onChangeHook: (text: string) => void;
  onOptimizeWithAI: () => Promise<void>;
  isOptimizing: boolean;
}

export const EditorToolbar: React.FC<Props> = ({
  clip,
  layoutMode,
  onChangeLayout,
  enabledSFX,
  onToggleSFX,
  customHook,
  onChangeHook,
  onOptimizeWithAI,
  isOptimizing,
}) => {
  const [isEditingHook, setIsEditingHook] = useState(false);
  const [tempHook, setTempHook] = useState(customHook || clip.hindiHook);

  const handleSaveHook = () => {
    onChangeHook(tempHook);
    setIsEditingHook(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-5">
      {/* 1. 9:16 Camera Layout Selection */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>9:16 Vertical Camera Cropping</span>
          </label>
          <span className="text-[11px] text-amber-400 font-bold">
            {layoutMode === 'smart-split'
              ? 'Split (Speaker Top + HUD Bottom)'
              : layoutMode === 'speaker-focus'
              ? 'Speaker Center Crop'
              : 'Classroom Slide + PiP'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onChangeLayout('smart-split')}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
              layoutMode === 'smart-split'
                ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-1 ring-amber-500/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <SplitSquareVertical className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-[11px]">Smart Split</span>
          </button>

          <button
            onClick={() => onChangeLayout('speaker-focus')}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
              layoutMode === 'speaker-focus'
                ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-1 ring-amber-500/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="font-extrabold text-[11px]">Speaker Focus</span>
          </button>

          <button
            onClick={() => onChangeLayout('pip-slide')}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-medium transition-all ${
              layoutMode === 'pip-slide'
                ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-1 ring-amber-500/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Tv className="w-5 h-5" />
            <span className="font-extrabold text-[11px]">Slide + PiP</span>
          </button>
        </div>
      </div>

      {/* 2. Opening 3-Second Viral Hook Banner */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>Opening 3-Second High-CTR Hook Banner</span>
          </div>
          {!isEditingHook && (
            <button
              onClick={() => {
                setTempHook(customHook || clip.hindiHook);
                setIsEditingHook(true);
              }}
              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit Hook</span>
            </button>
          )}
        </div>

        {isEditingHook ? (
          <div className="space-y-2">
            <input
              type="text"
              value={tempHook}
              onChange={(e) => setTempHook(e.target.value)}
              placeholder="Enter aggressive, punchy Hinglish hook..."
              className="w-full bg-slate-950 border border-amber-500/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditingHook(false)}
                className="px-3 py-1 text-xs text-slate-400 hover:text-white font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveHook}
                className="px-3.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1"
              >
                <Check className="w-3 h-3" />
                <span>Save Banner</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-red-950/25 border border-red-900/50 rounded-xl text-xs text-amber-200 font-bold flex items-center justify-between">
            <span className="line-clamp-1">🔥 {customHook || clip.hindiHook}</span>
            <span className="text-[10px] text-red-400 font-mono shrink-0 ml-2">FIRST 4s</span>
          </div>
        )}
      </div>

      {/* 3. Viral Sound Effects Mixer */}
      <div className="pt-4 border-t border-slate-800/80">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
          Viral Sound FX & Punch Cuts
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onToggleSFX('laughter')}
            className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
              enabledSFX.laughter
                ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 font-bold'
                : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-2">
              <Laugh className="w-4 h-4 text-emerald-400" />
              <span>Audience Laugh</span>
            </div>
            <span className="text-[10px] font-mono">{enabledSFX.laughter ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => onToggleSFX('ding')}
            className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
              enabledSFX.ding
                ? 'bg-amber-950/30 border-amber-500/50 text-amber-300 font-bold'
                : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>Rule Reveal Ding</span>
            </div>
            <span className="text-[10px] font-mono">{enabledSFX.ding ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => onToggleSFX('whoosh')}
            className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
              enabledSFX.whoosh
                ? 'bg-sky-950/30 border-sky-500/50 text-sky-300 font-bold'
                : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-sky-400" />
              <span>Zoom Whoosh</span>
            </div>
            <span className="text-[10px] font-mono">{enabledSFX.whoosh ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => onToggleSFX('punch')}
            className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
              enabledSFX.punch
                ? 'bg-red-950/30 border-red-500/50 text-red-300 font-bold'
                : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-400" />
              <span>Punchline Thud</span>
            </div>
            <span className="text-[10px] font-mono">{enabledSFX.punch ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* 4. AI Viral Optimizer Button */}
      <div className="pt-2">
        <button
          onClick={onOptimizeWithAI}
          disabled={isOptimizing}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 hover:from-purple-500 hover:to-amber-500 text-white font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
        >
          {isOptimizing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Extracting Maximum Viral Aggression...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Re-Score Virality & Generate Fresh Hook</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
