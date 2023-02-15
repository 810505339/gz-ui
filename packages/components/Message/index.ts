import MessageProvider from "./messageProvider.vue";
import type { Plugin, App } from 'vue'

export const GzMessageProvider: Plugin = {
  install(app: App) {
    app.component(MessageProvider.name, MessageProvider)
  }
}
export { useMessage } from './useMessage'
