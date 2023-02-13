
import type { App, Plugin } from 'vue'
import Option from './option.vue'
import Select from './select.vue'


export const GzOption: Plugin = {
  install(app: App) {
    app.component(Option.name, Option)
  }
}

export const GzSelect: Plugin = {
  install(app: App) {
    app.component(Select.name, Select)
  }
}
