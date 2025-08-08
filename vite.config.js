// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/The-Infinity-Button/', // This MUST match your repo name exactly
  plugins: [react()],
});
