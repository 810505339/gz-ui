<script lang="ts">
import type { VNodeChild } from 'vue'
import type { MessageOptions } from './types';
type ContentType = string | (() => VNodeChild)
export const messageApiInjectionKey = 'message-api'

export interface MessageReactive {
  content?: ContentType
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  showIcon?: boolean
  onClose?: () => void
  destroy: () => void
}

interface PrivateMessageReactive extends MessageReactive {
  key: string
}
</script>
<script setup lang="ts">
import { ref, provide } from 'vue';
import { v4 as uuidv4 } from 'uuid';

defineOptions({
  name: 'gzMessageProvider'
})



const messageList = ref<PrivateMessageReactive[]>([])

const api = {
  create(content: ContentType, options?: MessageOptions) {
    return create(content, { type: 'default', ...options })
  },
  info(content: ContentType, options?: MessageOptions) {
    return create(content, { ...options, type: 'info' })
  },
  success(content: ContentType, options?: MessageOptions) {
    return create(content, { ...options, type: 'success' })
  },
  warning(content: ContentType, options?: MessageOptions) {
    return create(content, { ...options, type: 'warning' })
  },
  error(content: ContentType, options?: MessageOptions) {
    return create(content, { ...options, type: 'error' })
  },
  loading(content: ContentType, options?: MessageOptions) {
    return create(content, { ...options, type: 'loading' })
  }
}

function create(content: ContentType, options?: MessageOptions) {
  const key = uuidv4()
  console.log(1);
  const messageReactive = ref({
    ...options,
    content,
    key,
    destroy: () => {
      const index = messageList.value.findIndex(message => message.key === key)
      if (!!~index) {
        //todo

      }
    }
  })


  messageList.value.push(messageReactive.value)

}
provide(messageApiInjectionKey, api)

</script>

<template>
  <slot></slot>
  <Teleport to="body" v-if="messageList.length">
    <div>
      <div v-for="message in messageList" :key="message.key">{{ message.key }}</div>
    </div>
  </Teleport>
</template>
