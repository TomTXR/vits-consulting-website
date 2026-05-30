// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://vits-consulting.de',
  output: 'static',

  build: {
    format: 'directory'
  },

  adapter: cloudflare()
});