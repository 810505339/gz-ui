import DefaultTheme from 'vitepress/theme'
import GzUi from '@gz-ui/ui'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './var.css'
import MyLayout from '../../vitepress/MyLayout.vue'
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  // this is a Vue 3 functional component
  setup() {
    console.log(1);
    
  },
  enhanceApp({ app }) { //全局md文件注入
    console.log(app);

    app.use(GzUi)
  },
}
