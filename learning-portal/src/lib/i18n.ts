import { Lang } from '@/types';

const translations = {
  en: {
    nav_title: 'AI System Design',
    nav_subtitle: 'by Roman Yustin · EPAM',
    dashboard_title: 'AI System Design & Architecture',
    dashboard_subtitle: '6-month curriculum · March – Fall 2026 · Curator: Roman Yustin',
    overall_progress: 'Overall Progress',
    tasks_label: 'tasks',
    back_all_phases: 'All phases',
    phase_label: 'Phase',
    goal_label: 'Goal',
    section_topics: 'Topics',
    section_tasks: 'Tasks',
    section_milestones: 'Milestones',
    section_resources: 'Resources',
    chat_placeholder: 'Ask about the curriculum…',
    chat_header: 'AI Learning Assistant',
    chat_empty: 'Ask me anything about the curriculum!',
    lang_switch: 'RU',
  },
  ru: {
    nav_title: 'AI System Design',
    nav_subtitle: 'куратор: Роман Юстин · EPAM',
    dashboard_title: 'AI System Design & Architecture',
    dashboard_subtitle: '6-месячный курс · Март – Осень 2026 · Куратор: Роман Юстин',
    overall_progress: 'Общий прогресс',
    tasks_label: 'задач',
    back_all_phases: 'Все модули',
    phase_label: 'Модуль',
    goal_label: 'Цель',
    section_topics: 'Темы',
    section_tasks: 'Задания',
    section_milestones: 'Ключевые точки',
    section_resources: 'Ресурсы',
    chat_placeholder: 'Спроси о программе обучения…',
    chat_header: 'AI-ассистент по обучению',
    chat_empty: 'Спроси меня о чём угодно по программе!',
    lang_switch: 'EN',
  },
};

export function ui(key: keyof typeof translations['en'], lang: Lang): string {
  return translations[lang][key];
}
