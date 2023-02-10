import type { App, Plugin } from 'vue'
import Button from './button.vue'

export const GzButton: Plugin = {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
