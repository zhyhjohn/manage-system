import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false, //是否读取ts文件模块,设置为true时不能读取js文件
      logger: false, //是否在控制台显示请求日志
      mockPath: './src/mock/' // 注意:此时的 mockPath 地址是真正安装的 mock 文件夹的地址; 设置模拟数据的存储文件夹,如果不是index.js需要写明完整路径
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
