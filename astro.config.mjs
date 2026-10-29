// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, social previews and the sitemap. Change it here if the domain changes.
  site: 'https://anastasis-portfolio.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});