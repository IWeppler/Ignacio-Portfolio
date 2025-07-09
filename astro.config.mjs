// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://ignacioweppler.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
});
