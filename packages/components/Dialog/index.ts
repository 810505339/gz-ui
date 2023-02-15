import Dialog from "./dialog.vue";
import type { App, Plugin } from 'vue'


export const GzDialog: Plugin = {
  install(app: App) {
    app.component(Dialog.name, Dialog)
  }
}


