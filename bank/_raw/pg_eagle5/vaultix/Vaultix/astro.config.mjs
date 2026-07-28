// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Cloudflare Pages deploy URL. Override locally with SITE_URL env var.
const SITE = process.env.SITE_URL || "https://temlis-eagle.pages.dev";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
