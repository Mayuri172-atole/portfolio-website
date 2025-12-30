import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio-website/',  // ← ADD THIS BACK!
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs'  // ← docs folder for GitHub Pages
  }
})
