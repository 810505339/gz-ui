<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'success' | 'info' | 'warning' | 'danger' | 'default' | 'primary',
  closable: boolean
}>(), {
  type: 'default'
})
const visible = ref(true)

function handleClose() {
  visible.value = false
}

//classFn
const tagClass = computed(() => {
  const obj = {
    default: `text-gray-500  border-gray-300 bg-gray-50`,
    primary: `text-violet-500  border-violet-300 bg-violet-50`,
    info: `text-blue-500  border-blue-300 bg-blue-50 `,
    success: `text-green-500  border-green-300 bg-green-50`,
    warning: `text-orange-500  border-orange-300 bg-orange-50 `,
    danger: `text-red-500  border-red-300 bg-red-50 `
  }

  return obj[props.type]
})
</script>
<template>
  <span :class="[tagClass]" h24px text-12px py1 px2 rounded cursor-pointer inline-flex justify-center items-center
    v-if="visible">
    <slot></slot>
    <span ml2 h12px w12px v-if="closable" @click="handleClose">
      <i i-heroicons-x-mark h12px w12px block></i>
    </span>
  </span>
</template>
