import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/smartia/", // 🔹 Ajusta con el nombre de tu repositorio en GitHub
  plugins: [react()],
});
