import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
import GzUi from '@gz-ui/ui'
const app = createApp(App)
app.use(GzUi)
app.mount('#app')
