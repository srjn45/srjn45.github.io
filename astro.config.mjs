import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site — served at the domain root.
export default defineConfig({
  site: 'https://srjn45.github.io',
  integrations: [sitemap()],
});
