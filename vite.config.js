import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smartia/", // ⚠️ Asegúrate de que coincida con el nombre de tu repo
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
