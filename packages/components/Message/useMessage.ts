import { inject } from "vue"
import { messageApiInjectionKey } from "./messageProvider.vue"

export function useMessage() {
  const api = inject(messageApiInjectionKey, null)
  if (api === null) {
    new Error(`use-message: No outer <gz-message-provider />`)
  }
  return api
}
