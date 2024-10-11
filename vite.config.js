import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(),
    process.env.VITE_SENTRY_ENABLED === 'true' ? sentryVitePlugin({
      org: "jsm-42",
      project: "javascript-react"
    }) : undefined],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
  }
})