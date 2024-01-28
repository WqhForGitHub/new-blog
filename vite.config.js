import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        // target: "http://120.24.4.92:3000", // 生产地址
        target: 'http://192.168.0.10:3000',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace("api", '')
      }
    }
  }
})
