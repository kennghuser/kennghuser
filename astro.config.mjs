// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.new/config
export default defineConfig({
  // TODO(kenn): set to the production domain once chosen.
  site: 'https://kennghuser.example.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
