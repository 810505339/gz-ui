<script lang="ts">
let zIndex = ref(2023)
</script>

<script setup lang="ts">

import { computed, onMounted, useSlots, watch, ref } from 'vue';
defineOptions({
  name: 'gzDialog'
})
const props = withDefaults(defineProps<{
  title?: string
  value?: boolean
  width?: string
  closeOnClickModal?: boolean
  showClose?: boolean
  closeOnPressEscape?: boolean
  beforeClose?: (done: () => void) => void
}>(), {
  title: 'title',
  value: false,
  width: '50%',
  closeOnClickModal: false,
  showClose: true,
  closeOnPressEscape: true
})

const emits = defineEmits<{
  (e: 'update:value', show: boolean): void
}>()

const slots = useSlots()

//fn
function close() {
  if (props.beforeClose) {
    props.beforeClose?.(change)
  } else {
    change()
  }
}
//点击modal
function handleModal() {
  if (!props.closeOnClickModal) {
    return
  }
  if (props.beforeClose) {
    props.beforeClose?.(change)
  } else {
    change()
  }
}
const zIndexClass = computed(() => {
  return zIndex.value
})

function change() {
  emits('update:value', false)
}

watch(() => props.value, (newVal) => {
  if (newVal) {
    zIndex.value++
  }

})

</script>
<template>
  <div top="0" right="0" left="0" bottom="0" fixed h="100%" bg="black opacity-30" :style="{ zIndex: zIndexClass }"
    box-border v-show="props.value" @click="handleModal">
    <div :style="{ width: props.width }" ma mt="15vh" bg="#2c2c32" shadow-lg rounded px20px pb20px>
      <header py20px flex items-center justify-between>
        <slot name="header" v-if="!!slots.header" :close="close"></slot>
        <template v-else>
          <span text-lg>{{ title }}</span>
          <button @click="close" v-if="showClose">
            <i block i-heroicons:x-mark text-sm></i>
          </button>
        </template>
      </header>
      <slot></slot>
      <footer pt20px>
        <slot name="footer"></slot>
      </footer>
    </div>
</div>
</template>
