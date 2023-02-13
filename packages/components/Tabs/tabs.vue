<script setup lang="ts">
import { ref, useSlots, computed } from 'vue'

withDefaults(defineProps<{
  value?: string,
}>(), {

})


const slotProps = computed(() => {
  const slotsDefault = useSlots().default?.() ?? []
  return slotsDefault.map(item => item.props)
})



defineOptions({
  name: 'GzTabs'
})
</script>

<template>
  <div>
    heder
    {{ slotProps }}
  </div>
  <div>

  </div>
</template>
