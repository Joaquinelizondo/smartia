import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/smartia/',
  build: {
    outDir: './',  // <-- Poner la salida en la raíz
    emptyOutDir: false  // <-- Evita borrar archivos importantes
  }
});
