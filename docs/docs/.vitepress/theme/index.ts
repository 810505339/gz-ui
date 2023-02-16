import DefaultTheme from 'vitepress/theme'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './var.css'
import GzUi from '@gz-ui/builds'
import MyLayout from '../../vitepress/MyLayout.vue'
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  // this is a Vue 3 functional component
  setup() {


  },
  enhanceApp({ app }) { //全局md文件注入
    app.use(GzUi)
  },
}
