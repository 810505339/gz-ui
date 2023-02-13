<script setup lang="ts">

defineOptions({
  name: 'GzTabPane'
})


withDefaults(defineProps<{
  label?: string
  disabled: boolean
  name?: string
  closable: boolean
}>(), {
  closable: false,
  disabled: false,
})
</script>

<template>
  <div>
    tabpane
  </div>
</template>
