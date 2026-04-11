export type Lang = 'en' | 'ru';

export interface LocalizedString {
  en: string;
  ru: string;
}

export interface Topic {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface Task {
  id: string;
  phaseId: number;
  title: LocalizedString;
  description?: LocalizedString;
  project?: boolean;
}

export interface Resource {
  title: string;
  url?: string;
  type: 'book' | 'course' | 'tool' | 'video' | 'article' | 'other';
  videoId?: string;
  description?: string;
  free?: boolean;
}

export interface Phase {
  id: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  dateRange: string;
  goal: LocalizedString;
  topics: Topic[];
  tasks: Task[];
  milestones: LocalizedString[];
  resources: Resource[];
}

export interface UserProgress {
  tasks: Record<string, boolean>;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  question: LocalizedString;
  options: LocalizedString[];
  correct: number; // index into options
  explanation: LocalizedString;
}

export interface PhaseQuiz {
  phaseId: number;
  questions: QuizQuestion[];
}

// ─── Gamification ────────────────────────────────────────────────────────────

export type AchievementCategory = 'progress' | 'mastery' | 'streak' | 'quiz' | 'special';

export interface Achievement {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  xpReward: number;
  category: AchievementCategory;
  secret?: boolean;
}

export interface LevelInfo {
  level: number;
  name: LocalizedString;
  icon: string;
  minXP: number;
  nextXP: number | null;
}

export interface GamificationData {
  achievements: string[];
  quizScores: Record<string, number>; // phaseId -> best % score (0–100)
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD, empty if never
  pendingToasts: string[]; // achievement IDs waiting to be shown
}
