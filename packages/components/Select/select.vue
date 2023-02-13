<script lang="ts">
interface Item {
  label: string
  value: string
}
export const selectProvideKey: InjectionKey<{
  selectOption: Ref<Item>
  select: (option: {
    label: string;
    value: string;
  }) => void
}> = Symbol('selectProvideKey')

</script>
<script setup lang="ts">
import { computed, provide, ref, type InjectionKey, type Ref, onMounted, watch } from 'vue';
import Input from '../Input/input.vue'
import type { OnClickOutsideHandler } from '@vueuse/core'
import { vOnClickOutside, vElementHover } from '@vueuse/components'



const props = withDefaults(defineProps<{
  placeholder?: string
  value?: string
  disabled?: boolean
  clearable?: boolean
  option: Array<{
    label: string
    value: string,
    disabled?: true
  }>
}>(), {
  clearable: false,
  disabled: false
})

const emits = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'clear'): void
}>()

defineOptions({
  name: 'GzSelect'
})

//是否展开
const isOpen = ref(false)
//获取option
const selectOption = ref({
  label: '',
  value: props.value
})
//
const isHovered = ref(false)


const isClear = computed(() => {
  return props.clearable && isHovered.value && props.value
})

const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  isOpen.value = false
}


//fn
function inputClick() {
  if (props.disabled) {
    return
  }
  isOpen.value = !isOpen.value
}
//点击option把数据传送给select
function select(option: { label: string, value: string }) {
  selectOption.value = option
  setTimeout(() => {
    isOpen.value = false
    emits('update:value', option.value)
  }, 100)

}

function onHover(state: boolean) {
  isHovered.value = state

}

function clear() {
  selectOption.value = { label: '', value: '' }
  emits('update:value', '')
  emits('clear')
}

//classFn
const iconClass = computed(() => {
  return `${isOpen.value ? 'rotate--180' : ''}`
})

provide(selectProvideKey, {
  selectOption,
  select
})
watch(() => props.value, (newVal) => {
  const index = props.option?.findIndex((item) => item.value === props.value)
  if (!!~index) {
    console.log(props.option[index]);
    select(props.option[index])
  }

})


</script>
<template>

  <div relative v-element-hover="onHover">
    <Input :placeholder="placeholder" @click.stop="inputClick" :value="selectOption.label" readonly
      :disabled="disabled">
    <template #suffix>
      <i i-heroicons-x-mark h12px w12px text-sm duration-300 v-if="isClear" @click.stop="clear"></i>
      <i h12px w12px text-sm i-heroicons-chevron-down transition-all duration-300 :class="iconClass" v-else></i>
    </template>
    </Input>
    <transition tag="div" text-center name="list" mode="out-in">
      <ul v-if="isOpen" v-on-click-outside.bubble="dropdownHandler" w="100%" bg-white py2 absolute z-10 shadow
        dark:bg="#161618" dark:text="white" rounded>
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
