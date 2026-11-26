// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.new/config
export default defineConfig({
  // Production URL (Vercel). Change this if a custom domain is added.
  site: 'https://kennghuser.vercel.app',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
