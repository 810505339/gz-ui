import type { App, Plugin } from 'vue'
import Badge from './badge.vue'

export const GzBadge: Plugin = {
  install(app: App) {
    console.log(Badge.name);
    
    app.component(Badge.name, Badge)
  }
}
