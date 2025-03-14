import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smartia/", // ⚠️ Cambia "smartia" por el nombre exacto del repo en GitHub
});
