// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://gosimfoundation.github.io",
  base: "/OpenSDGConference",
  redirects: {
    '/schedule': '/agenda',
    '/schedule/': '/agenda/',
  },
});
