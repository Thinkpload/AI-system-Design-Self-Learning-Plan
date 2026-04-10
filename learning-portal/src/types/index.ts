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
}

export interface Resource {
  title: string;
  url?: string;
  type: 'book' | 'course' | 'tool' | 'video' | 'other';
  videoId?: string; // YouTube video ID for embedding
  description?: string;
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
