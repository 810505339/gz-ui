
import type { App, Plugin } from 'vue'
import Tabs from './tabs.vue'
import  TabPane from './tabPane.vue'


export const GzTabs: Plugin = {
  install(app: App) {
    app.component(Tabs.name, Tabs)
  }
}

export const GzTabPane: Plugin = {
  install(app: App) {
    app.component(TabPane.name, TabPane)
  }
}
