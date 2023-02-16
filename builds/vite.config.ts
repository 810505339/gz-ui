import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
//https://github.com/sxzz/unplugin-vue-macros/blob/main/playground/vue3/vite.config.ts
//https://github.com/sxzz/unplugin-vue-macros/issues/257
import VueMacros from 'unplugin-vue-define-options'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros.vite(), Vue(), UnoCSS(), dts()],
  build: {
    lib: {
      entry: './index.ts',
      name: '@gz-ui/ui',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'gz-ui',
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
  }
})
