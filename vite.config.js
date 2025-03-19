import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/smartia/',  // Asegura que GitHub Pages use la ruta correcta
  build: {
    outDir: 'dist',  // ⬅️ Deja que Vite genere el build en `dist`
    emptyOutDir: true  // ⬅️ Borra la carpeta `dist` antes de cada build
  }
});
