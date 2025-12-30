import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    base: '/portfolio-website/',  // 👈 GitHub Pages repo name
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist'
    },
    server: {
      open: true
    }
  };
});
