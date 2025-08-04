// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://gosimfoundation.github.io",
  // Only use base path when building for GitHub Pages
  base: process.env.GITHUB_PAGES === 'true' ? "/OpenSDGConference" : "/",
  redirects: {
    '/schedule': '/agenda',
    '/schedule/': '/agenda/',
  },
});
