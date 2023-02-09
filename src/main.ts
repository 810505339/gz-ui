import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
import 'uno.css'
const app = createApp(App)
app.mount('#app')
