// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vits-consulting.de',
  output: 'static',
  build: {
    format: 'directory'
  }
});
