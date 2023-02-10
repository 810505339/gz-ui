
import type { App, Plugin } from 'vue'
import CheckBox from './checkbox.vue'
import CheckBoxGroup from './checkboxGroup.vue'

export const GzCheckBox: Plugin = {
  install(app: App) {
    app.component(CheckBox.name, CheckBox)
  }
}

export const GzCheckBoxGroup: Plugin = {
  install(app: App) {
    app.component(CheckBoxGroup.name, CheckBoxGroup)
  }
}
