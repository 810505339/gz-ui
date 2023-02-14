
import type { App, Plugin } from 'vue'
import Switch from './switch.vue'


export const GzSwitch: Plugin = {
  install(app: App) {
    app.component(Switch.name, Switch)
  }
}
