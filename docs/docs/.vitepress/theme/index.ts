import DefaultTheme from 'vitepress/theme'
import GzUi from '@gz-ui/ui'
import '@unocss/reset/tailwind.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  // this is a Vue 3 functional component

  enhanceApp({ app }) { //全局md文件注入
    app.use(GzUi)
  },
}
