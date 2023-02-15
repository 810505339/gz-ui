<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import alert from '../Alert/alert.vue'

interface MessageReactive {
  content?: string
  duration?: number
  closable?: boolean
  type: "default" | "success" | "warning" | "info" | "error"
}
const props = withDefaults(defineProps<MessageReactive>(), {
  duration: 3000,
  type: "default"
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
  <Transition name="fade">
    <alert :title="props.content" :type="props.type" :closable="closable" mb10px v-if="showRef" @close="hide"
      translate-y--5px />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-5px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(5px);
}
</style>
