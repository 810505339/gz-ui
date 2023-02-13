<script setup lang="ts">
import { computed, defineProps, ref, defineEmits } from 'vue';
defineOptions({
  name: 'gzTag'
})

const props = withDefaults(defineProps<{
  type?: 'success' | 'info' | 'warning' | 'danger' | 'default' | 'primary',
  closable?: boolean
  round?: boolean
}>(), {
  type: 'default',
  closable: false,
  round: false
})
const emits = defineEmits<{
  (e: 'close'): void
  (e: 'click'): void
}>()
const visible = ref(true)

function handleClose() {
  visible.value = false
  emits('close')
}

//classFn
const tagClass = computed(() => {
  const obj = {
    default: `text-gray-500  border-gray-300 bg-gray-100`,
    primary: `text-violet-500  border-violet-300 bg-violet-100`,
    info: `text-blue-500  border-blue-300 bg-blue-100 `,
    success: `text-green-500  border-green-300 bg-green-100`,
    warning: `text-orange-500  border-orange-300 bg-orange-100 `,
    danger: `text-red-500  border-red-300 bg-red-100 `
  }

  return obj[props.type]
})


const roundClass = computed(() => {
  return `${props.round ? 'rounded-xl' : 'rounded'}`
})
</script>
<template>
  <span :class="[tagClass, roundClass]" h24px text-12px py2 px3 cursor-pointer inline-flex justify-center items-center
    v-if="visible" @click="emits('click')">
    <slot></slot>
    <span ml2 h12px w12px v-if="closable" @click="handleClose">
      <i i-heroicons-x-mark h12px w12px block></i>
    </span>
  </span>
</template>
