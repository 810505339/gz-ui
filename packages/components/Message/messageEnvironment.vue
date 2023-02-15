<script setup lang='ts'>
import { onMounted, ref } from 'vue';
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
const props = withDefaults(defineProps<MessageReactive>(), {
  duration: 3000
})
const showRef = ref<boolean>(true)
let timerId: number | null = null


onMounted(() => {
  setHideTimeout()
})

function setHideTimeout() {
  if (props.duration) {
    timerId = window.setTimeout(hide, props.duration)
  }
}
function hide() {
  showRef.value = false

  if (timerId) {
    window.clearTimeout(timerId)
    timerId = null
  }
}
</script>

<template>
  <alert :title="props.content" :closable="closable" mb10px v-if="showRef" @close="hide" />
</template>
