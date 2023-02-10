import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
//https://github.com/sxzz/unplugin-vue-macros/blob/main/playground/vue3/vite.config.ts
//https://github.com/sxzz/unplugin-vue-macros/issues/257
import VueMacros from 'unplugin-vue-define-options'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros.vite(), Vue(), VueJsx(), UnoCSS()],
  build: {
    lib: {
      entry: './index.ts',
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
