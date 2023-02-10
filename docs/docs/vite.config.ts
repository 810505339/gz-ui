import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import UnoCSS from 'unocss/vite'
//https://github.com/sxzz/unplugin-vue-macros/blob/main/playground/vue3/vite.config.ts
//https://github.com/sxzz/unplugin-vue-macros/issues/257
import VueMacros from 'unplugin-vue-define-options'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros.vite(), UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
