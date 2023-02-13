import { GzInput } from '@gz-ui/components/Input/index'
import { GzButton } from '@gz-ui/components/Button'
import { GzCheckBoxGroup, GzCheckBox } from '@gz-ui/components/CheckBox'
import { GzTag } from '@gz-ui/components/Tag'
import { GzOption } from '@gz-ui/components/Select/option'
import { GzSelect } from '@gz-ui/components/Select/select'
import { GzTag } from '@gz-ui/components/Tag'
import './index.css'


import type { App } from 'vue'


const Installer = {
  install(app: App) {
    [GzButton, GzCheckBoxGroup, GzCheckBox, GzInput,GzTag,GzOption,GzSelect].forEach((c) => {

      app.use(c)
    })
  }
}

export default Installer
export {
  GzButton
}
