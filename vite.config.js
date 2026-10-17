import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Automatically forwards any /api request to your local Express server during development
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})