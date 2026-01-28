// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinnr.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      changefreq: /** @type {const} */ ('weekly'),
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Boost homepage priority
        if (item.url === 'https://pinnr.app/') {
          item.priority = 1.0;
          item.changefreq = /** @type {const} */ ('daily');
        }
        return item;
      },
    }),
  ],
});