import type { App, Plugin } from 'vue'
import Alert from './alert.vue'

export const GzAlert: Plugin = {
  install(app: App) {
    app.component(Alert.name, Alert)
  }
}


