<script setup lang="ts">
import { computed, defineProps, inject, onMounted, useSlots, watch } from 'vue';
import { selectProvideKey } from './select.vue'
const props = defineProps<{
  label?: string
  disabled?: boolean
  value?: string
}>()
const optionInject = inject<any>(selectProvideKey)
const slotDefault = !!useSlots().default;
defineOptions({
  name: 'GzOption'
})

//fn
function handleClick() {
  if (!props.disabled) {
    optionInject.select({ label: props.label, value: props.value })
  }


}

//classFn
const selectClass = computed(() => {
  return `${optionInject.selectOption.value.value === props.value ? 'text-violet-500' : ''}`
})

const disabledClass = computed(() => {
  return `${props.disabled ? 'cursor-not-allowed  text-gray-500' : 'dark:hover:bg-[#262727] hover:bg-gray-100'}`
})

</script>
<template>
  <li relative overflow-hidden h32px text-ellipsis leading-32px cursor-pointer @click="handleClick"
    :class="[selectClass,disabledClass]">
    <slot v-if="slotDefault" />
    <span v-else>{{ label }}</span>
  </li>
</template>
