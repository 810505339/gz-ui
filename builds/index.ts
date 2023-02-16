import { GzInput } from '@gz-ui/components/Input/index'
import { GzButton } from '@gz-ui/components/Button'
import { GzAlert } from '@gz-ui/components/Alert'
import { GzCheckBoxGroup, GzCheckBox } from '@gz-ui/components/CheckBox'
import { GzTag } from '@gz-ui/components/Tag'
import { GzBadge } from '@gz-ui/components/Badge'
import { GzOption, GzSelect } from '@gz-ui/components/Select'
import { GzTabPane, GzTabs } from '@gz-ui/components/Tabs'
import { GzSwitch } from '@gz-ui/components/Switch'
import { GzMessageProvider, useMessage } from '@gz-ui/components/Message'
import { GzDialog } from '@gz-ui/components/Dialog'

import './index.css'
import 'uno.css'



import type { App } from 'vue'


const Installer = {
  install(app: App) {
    [GzButton, GzCheckBoxGroup, GzCheckBox, GzInput, GzTag, GzOption, GzSelect, GzTabPane, GzTabs, GzBadge, GzAlert, GzSwitch, GzMessageProvider, GzDialog].forEach((c) => {
      app.use(c)
    })
    // [GzButton, GzCheckBoxGroup, GzCheckBox, GzInput, GzTag, GzOption, GzSelect, GzTabPane, GzTabs, GzBadge, GzAlert, GzSwitch, GzMessageProvider,GzDialog].forEach((c) => {
    //   app.use(c)
    // })
  }
}

export default Installer
export {
  useMessage
}
