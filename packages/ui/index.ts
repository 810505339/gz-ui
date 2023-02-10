import { GzButton } from '@gz-ui/components/Button'

import type { App } from 'vue'


const Installer = {
  install(app: App) {
    [GzButton].forEach((c) => {
      debugger
      app.use(c)
    })
  }
}

export default Installer
export {
  GzButton
}
