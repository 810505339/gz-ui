
import type { App, Plugin } from 'vue'
import Tag from './tag.vue'


export const GzTag: Plugin = {
  install(app: App) {
    app.component(Tag.name, Tag)
  }
}
