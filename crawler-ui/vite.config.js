import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
    // extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  build: {
    rollupOptions: {
      input: {
        // 配置所有页面路径，使得所有页面都会被打包
        main: path.resolve(__dirname, 'index.html'),
        crawlerHome: path.resolve(__dirname, 'CrawlerHome/index.html')
      }
    }
  }
})
