import { useTheme } from '@/contexts/ThemeContext';
import { getTranslation, type Language } from '@/lib/i18n/translations';

export function useTranslation(namespace: string = 'common') {
  const { language } = useTheme();

  const t = (key: string): string => {
    return getTranslation(language as Language, namespace, key);
  };

  return { t, language };
}
