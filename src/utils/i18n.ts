import es from '../locales/es.json';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

export const translations = { es, en, pt };

export type SupportedLang = keyof typeof translations;

export function t(lang: SupportedLang, key: string): any {
  const keys = key.split('.');
  let result: any = translations[lang];

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key;
    }
  }

  return result;
}


export function getValidLang(lang: string | undefined): SupportedLang {
  const supportedLangs = Object.keys(translations) as SupportedLang[];
  if (typeof lang === 'string' && supportedLangs.includes(lang as SupportedLang)) {
    return lang as SupportedLang;
  }
  return 'es'; 
}
