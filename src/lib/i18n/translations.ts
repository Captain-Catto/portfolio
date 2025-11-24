import enCommon from '@/locales/en/common.json';
import viCommon from '@/locales/vi/common.json';

export type Language = 'en' | 'vi';

export const translations = {
  en: {
    common: enCommon,
  },
  vi: {
    common: viCommon,
  },
};

export function getTranslation(
  language: Language,
  namespace: string,
  key: string
): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[language]?.[namespace as keyof typeof translations.en];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
