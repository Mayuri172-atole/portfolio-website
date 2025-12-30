// vite.config.js (create in root)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  // 👈 ADD THIS
  build: {
    outDir: 'dist'
  }
})
