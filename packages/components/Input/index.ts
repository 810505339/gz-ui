
import type { App, Plugin } from 'vue'
import Input from './input.vue'


export const GzInput: Plugin = {
  install(app: App) {
    app.component(Input.name, Input)
  }
}


