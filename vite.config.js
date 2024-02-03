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
  // 开启代理服务器
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: false,
    https: false,
    proxy: {
      "/api": {
        target: "http://120.24.4.92:3000", // 生产地址
        // target: "http://192.168.0.13:3000",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
})
