import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  // 👈 MUST HAVE!
  build: {
    outDir: 'dist'
  }
})
