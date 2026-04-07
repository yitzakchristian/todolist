import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // String shorthand: forward /api requests to http://localhost:3000
      '/api': 'http://localhost:3000',
    }
  }
})
