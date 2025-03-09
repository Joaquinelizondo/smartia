import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/smartia/', // ⚠️ IMPORTANTE para que funcione en GitHub Pages
});
