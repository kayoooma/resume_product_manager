import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: 'base' must be './' for GitHub Pages to find assets (JS/CSS)
  // because GitHub Pages serves the site from a subdirectory (e.g. /my-repo/).
  base: './', 
});