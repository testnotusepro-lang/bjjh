export type EducationalType = 
  | 'Core Grammar Rule'
  | 'Viral Idiom'
  | 'Spoken English Phrase'
  | 'English Proverb'
  | 'Pronunciation & Logic';

export type SFXType = 'laughter' | 'ding' | 'whoosh' | 'punch' | 'scratch';

export type LayoutMode = 'smart-split' | 'speaker-focus' | 'pip-slide';

export type EnergyPace = 'Ultra-Aggressive' | 'High-Octane' | 'Fast-Banter';

export interface SubtitleWord {
  text: string;
  startOffset: number; // in seconds relative to clip start
  duration: number;
  highlight?: boolean;
  emoji?: string;
}

export interface SoundCue {
  timeOffset: number; // in seconds relative to clip start
  type: SFXType;
  label: string;
}

export interface HookVariation {
  type: 'Roast Hook' | 'Curiosity Hook' | 'Exam Challenge' | 'Family Relatable';
  text: string;
  ctrScore: number; // e.g. 98%
}

export interface YouTubeKit {
  title: string;
  description: string;
  tags: string[];
  pinnedComment: string;
  hookVariations: HookVariation[];
}

export interface ViralClip {
  id: string;
  title: string;
  hindiHook: string;
  startSeconds: number;
  endSeconds: number;
  duration: number; // e.g. 40s
  viralScore: number; // 90-100
  laughterScore: number; // 1-10
  aggressionScore: number; // 1-10
  energyPace: EnergyPace;
  viralTag: string; // e.g. '🔥 Trending Roast', '⚡ Rapid Fire Grammar'
  educationalType: EducationalType;
  targetConcept: string; // e.g. "Blow out of proportion"
  hindiMeaning: string; // e.g. "राई का पहाड़ बनाना"
  grammarFormula: string;
  exampleSentence: string;
  humorContext: string;
  teacherAction: string;
  subtitles: SubtitleWord[];
  soundCues: SoundCue[];
  youtubeKit: YouTubeKit;
}
