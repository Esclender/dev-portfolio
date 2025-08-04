import es from './es.json';
import en from './en.json';
import type { SupportedLocale } from '@/utils/i18n';

export const translations = {
  es,
  en,
} as const;

export function getTranslation(locale: SupportedLocale) {
  return translations[locale];
}

export type Translation = typeof es; 