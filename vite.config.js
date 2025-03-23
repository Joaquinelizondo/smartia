import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smartia/", // ⚠️ Debe coincidir con el nombre del repo en GitHub Pages
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
