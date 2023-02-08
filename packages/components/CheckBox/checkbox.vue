<script setup lang="ts">
import { inject, onMounted, ref, useSlots } from 'vue';
import { checkboxGroupInjectionKey } from './checkboxGroup.vue';

const props = withDefaults(defineProps<{
  checked?: boolean,
  label?: string,
  value?: string,
  disabled?: boolean,
  size?: 'lg' | 'sm'
}>(), {
  size: 'sm',
  disabled: false,
  checked: false
})
const emits = defineEmits<{
  (e: 'update:checked', checked: boolean): void
}>()
const slotDefault = !!useSlots().default;
const defaultChecked = ref(props.checked)
const checkboxInject = inject<any>(checkboxGroupInjectionKey, null)


onMounted(() => {
  if (checkboxInject) {
    const index: number = checkboxInject?.valueSetRef.value.findIndex((value: string) => value === props.value)
    defaultChecked.value = !!~index
  }

})

//点击修改checkbox
function change(e: Event) {
  const checked = (e.target as HTMLInputElement)?.checked
  defaultChecked.value = checked
  emits('update:checked', checked)
  checkboxInject?.toggleCheckbox(defaultChecked.value, props.value)
}


function checkboxBg() {
  return [`${defaultChecked.value ? 'bg-violet-500' : ''}`]
}
function checkboxText() {
  return [`${defaultChecked.value ? 'text-violet-500' : ''}`]
}
function checkboxIcon() {
  return `${props.disabled ? 'cursor-not-allowed opacity-50 select-none' : ''}`
}
function checkboxSize() {
  const obj = {
    sm: 'text-sm py2',
    lg: 'text-lg py4'
  }
  return obj[props.size]
}
function checkboxIconSize() {
  const obj = {
    sm: 'w12px h12px',
    lg: 'w16px h16px'
  }
  return obj[props.size]
}
</script>
<template>
  <label cursor-pointer flex items-center mx2 inline-flex :class="[checkboxIcon(), checkboxSize()]">
    <span inline-flex>
      <span hover='border-violet-500' border="~ rounded-sm gray-300 " relative
        :class="[checkboxBg(), checkboxIconSize()]" transition duration-500>

        <i i-heroicons-check-20-solid w="10px" h="10px" inline-block absolute top="50%" left='50%' translate='-50%'
          text-white v-if="defaultChecked" font-bold></i>
      </span>
      <input type="checkbox" :checked="defaultChecked" @change="change" :disabled="disabled" z="-1" absolute w="0" h="0"
        opacity-0 m="0" />
    </span>
    <span px="2" :class="checkboxText()">
      <slot v-if="slotDefault" />
      <template v-else>{{ label }}</template>

    </span>

  </label>
</template>
