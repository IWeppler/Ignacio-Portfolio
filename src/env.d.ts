declare module 'astro-i18next' {
  export function useTranslations(): {
    t: (key: string) => string;
  };

  export const languages: string[];
}
