<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
type TargetElement = HTMLInputElement | HTMLTextAreaElement
const props = withDefaults(defineProps<{
  placeholder?: string
  value?: string
  type?: string
  showPassword?: boolean
}>(), {
  type: 'text'
})
const focused = ref(false)
const emits = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()
const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  focused.value = false

  emits('blur', event)
}
const handleInput = (event: Event) => {
  const value = (event.target as TargetElement).value
  emits('update:value', value)
}

</script>
<template>
  <div flex px2 py2px items-center justify-center flex-grow rounded border="~" transition shadow-sm
    hover="border-violet-500" :class="[focused ? 'border-violet-500' : '']">
    <slot name="suffix"></slot>
    <input outline-none :placeholder="placeholder" w="100%" placeholder-text-gray-4 placeholder-text-sm :type="type"
      :value="value" @focus="handleFocus" @blur="handleBlur" @input="handleInput" />
    <slot name="prefix"></slot>
  </div>
</template>
