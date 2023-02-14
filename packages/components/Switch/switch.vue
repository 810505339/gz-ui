<script setup lang="ts">

import { computed, ref, watch } from 'vue'
defineOptions({
  name: 'gzSwitch'
})

const props = withDefaults(defineProps<{
  value: boolean,
  size?: 'sm' | 'lg',
  disabled?: boolean,
  activeText?: string,
  inactiveText?: string,
}>(), {
  size: 'sm',
  disabled: false
})

const emits = defineEmits<{
  (e: 'update:value', value: boolean): void
}>()

const checked = ref(props.value) //是否被选中
//fn
function handleClick() {
  if (props.disabled) {
    return
  }
  checked.value = !checked.value
  emits('update:value', checked.value)
}

//classFn

const actionClass = computed(() => {


  return `${checked.value ? props.size === 'sm' ? 'left-[calc(100%-17px)]' : 'left-[calc(100%-21px)]' : ' left-1px'}`
})

const checkedBgClass = computed(() => {
  return `${checked.value ? 'bg-violet-500' : 'bg-#4c4d4f'}`
})

const sizeBgClass = computed(() => {
  return `${props.size === 'sm' ? 'min-w-40px h20px' : 'min-w-50px h24px'}`
})
const sizeClass = computed(() => {
  return `${props.size === 'sm' ? 'w16px h16px' : 'w20px h20px'}`
})

const disabledClass = computed(() => {
  return `${props.disabled ? 'cursor-not-allowed select-none opacity-80' : ''}`
})

const showText = computed(() => {
  return checked.value ? props.activeText : props.inactiveText
})

const textClass = computed(() => {
  return `${!checked.value ? props.size === 'sm' ? 'left-[calc(100%-17px)]' : 'left-[calc(100%-21px)]' : ' left-1px'}`
})

watch(() => props.value, (newValue) => {
  checked.value = newValue

}, {
  immediate: true
})

</script>

<template>
  <div text-14px h32px inline-flex relative items-center>
    <input hidden type="checkbox" :checked="checked" />
    <span box-border relative inline-flex items-center rounded-xl border="~ #4c4d4f"
      :class="[checkedBgClass, sizeBgClass, disabledClass]" cursor-pointer @click="handleClick">

      <div v-if="activeText || inactiveText" absolute flex items-center justify-center transition-500 transition-all
        :class="[textClass]">
        <span>{{ showText }}</span>
      </div>

      <div rounded-full bg-white border="~" absolute flex items-center justify-center :class="[actionClass, sizeClass]"
        transition-500 transition-all shadow></div>
    </span>
  </div>
</template>

<style scoped>

</style>
