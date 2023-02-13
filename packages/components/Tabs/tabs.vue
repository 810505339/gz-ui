<script setup lang="ts">
import { ref, useSlots, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import tabNav from './tabNav.vue'
withDefaults(defineProps<{
  value?: string,
}>(), {

})

defineEmits<{
  (e: 'tabClick', pane: string, ev: Event): void
}>()


const slotProps = computed(() => {
  const slotsDefault = useSlots().default?.() ?? []
  return slotsDefault.map(item => {
    return { ...item.props, uid: uuidv4() }
  })
})



defineOptions({
  name: 'GzTabs'
})
</script>

<template>
  <tab-nav :navList="slotProps" />
  <div>
    <slot></slot>
  </div>
</template>
