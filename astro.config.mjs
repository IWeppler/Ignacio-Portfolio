import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import react from '@astrojs/react';

export default defineConfig({
  site: "https://ignacioweppler.com/",
  integrations: [sitemap(), partytown({
    config: {
      forward: ["gtag"],
    },
  }), react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});