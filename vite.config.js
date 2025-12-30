import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  // 👇 FIX: base = '/' for Vercel/Netlify (not repo name!)
  const basePath = mode === 'production' ? '/' : '/portfolio-site/';
  
  return {
    base: basePath,  // ✅ '/' for production deploy
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist'
    }
  };
});
