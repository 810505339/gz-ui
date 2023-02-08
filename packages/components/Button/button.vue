<script setup lang="ts">
import vRipple from '@/directives/ripple'

defineOt

interface Props {
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'default'
  ghost?: boolean
  disabled?: boolean
  size?: 'lg' | 'sm'
}

const { type, ghost, size, disabled } = withDefaults(defineProps<Props>(), {
  ghost: false,
  type: 'default',
  size: 'lg',
  disabled: false
})
const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void

}>()
const className = () => {
  if (type && size) {
    return [classByType(type, ghost), classSize(size), classDisabled(disabled)]
  }

}


function classByType(type: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'default', ghost: boolean) {


  const obj = {
    default: `${ghost ? 'text-violet-500  border-violet-600' : 'bg-violet-500 text-white'} `,
    primary: `${ghost ? 'text-green-500 border-green-600' : 'bg-green-500 text-white'}`,
    info: `${ghost ? 'text-blue-500 border-blue-600' : 'bg-blue-500 text-white'} `,
    success: `${ghost ? 'text-green-600 border-green-600' : 'bg-green-600 text-white'} `,
    warning: `${ghost ? 'text-orange-500 border-orange-600' : 'bg-orange-500 text-white'} `,
    error: `${ghost ? 'text-red-500 border-red-600' : 'bg-red-500 text-white'} `
  }

  return obj[type]
}
function classSize(size: 'lg' | 'sm') {
  const obj = {
    sm: 'px2 py1',
    lg: 'px4 py2'
  }
  return obj[size]
}
function classDisabled(disabled: boolean) {
  return !disabled || 'opacity-75'
}

</script>
<template>
  <button :disabled="disabled" :class="className()" text-center relative v-ripple duration-500 transition-all border="~"
    text-sm rounded box-border leading-5 antialiased @click="(e) => emits('click', e)">
    <slot></slot>
    <span class="ripple-root"></span>
  </button>
</template>
<style>
@import url('@/components/Button/index.css');
</style>
