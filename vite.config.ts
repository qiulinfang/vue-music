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
  // webpack-dev-server配置
  server: {
    open: false, // 打开浏览器
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      // 匹配所有以 '/api' 开头的请求
      '/api': {
        target: process.env.VUE_APP_API_URL, // 目标服务器地址
        changeOrigin: true, // 更改请求头中的origin为目标服务器地址
        rewrite: (path) => path.replace(/^\/api/, ''), // 移除请求路径中的 '/api' 前缀
        // 可选配置：配置超时、重试等
        timeout: 10000,
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 为Sass、Less或Stylus等预处理器提供全局变量或导入路径
      less: {
        additionalData: `
          @import 'src/assets/styles/variables.less';
          @import 'src/assets/styles/mixins.less';
        `,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly', // 控制CSS Modules的类名转换规则
    },

    devSourcemap: true, // 是否生成CSS源映射（仅开发环境）
  },
})

