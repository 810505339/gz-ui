import { GzButton } from '@gz-ui/components/Button'
import { GzCheckBoxGroup, GzCheckBox } from '@gz-ui/components/CheckBox'

import type { App } from 'vue'


const Installer = {
  install(app: App) {
    [GzButton, GzCheckBoxGroup, GzCheckBox].forEach((c) => {
      
      app.use(c)
    })
  }
}

export default Installer
export {
  GzButton
}
