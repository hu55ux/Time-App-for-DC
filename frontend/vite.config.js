import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      protocol: 'ws',
      host: '16.171.181.164',
      port: 80
    },
    proxy: {
      '^/time+s?': {
        target: 'http://api:5000',
        changeOrigin: true
      }
    },
    watch: {
      usePolling: true,
    }
  },
})