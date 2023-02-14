<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';



defineOptions({
  name: 'gzAlert'
})
const props = withDefaults(defineProps<{
  title: string,
  type?: 'success' | 'warning' | 'info' | 'error' | 'default',
  closable?: boolean,
  closeText?: string

}>(), {
  type: 'default',
  closable: true
})


const emits = defineEmits<{
  (e: 'close'): void
}>()

const titleSlot = !!useSlots().title
const show = ref(true)
//fn
function handleClose() {
  show.value = false
  emits('close')
}

//classFn

const classByType = computed(() => {
  const obj = {
    default: `bg-violet-500 `,
    info: `bg-gray-500 `,
    success: `bg-green-500 `,
    warning: ` bg-orange-500 `,
    error: `bg-red-500 `
  }

  return obj[props.type]
})

</script>

<template>
  <div w="100%" :class="[classByType]" text-white rounded text-sm px20px py10px box-border flex shadow items-center
    relative v-if="show" transition-all>
    <slot v-if="titleSlot" name="title"></slot>
    <div v-else>{{ title }}</div>

    <span absolute top="50%" right="6px" translate="-50%" text-sm cursor-pointer @click="handleClose" v-if="closable">
      {{ closeText }}
      <i block i-heroicons-x-mark v-if="!closeText"></i>
    </span>


  </div>
</template>
