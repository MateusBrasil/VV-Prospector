// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Publicar URL. Override with a SITE_URL env var (or repo variable in CI).
const SITE = process.env.SITE_URL || 'https://temlis-eagle.james-71d.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap({
      // Keep noindex pages (401/404) out of the sitemap.
      filter: (page) => !/\/(401|404)\/?$/.test(page),
    }),
  ],
});
