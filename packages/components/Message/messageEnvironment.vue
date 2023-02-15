<script setup lang='ts'>
import alert from '../Alert/alert.vue'

interface MessageReactive {
  content?: string
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  showIcon?: boolean
  onClose?: () => void
  destroy: () => void
}
const props = defineProps<MessageReactive>()
</script>

<template>
  <alert :title="props.content" :closable="closable" />
</template>
