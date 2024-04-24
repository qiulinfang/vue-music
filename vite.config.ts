import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Helper function to resolve paths
const resolve = (dir: string) => `${__dirname}/${dir}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
})

