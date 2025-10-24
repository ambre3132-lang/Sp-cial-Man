
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import type { Language } from '../types';

export const useTranslations = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};
