<script setup lang="ts">
defineOptions({
  name: 'gzSwitch'
})

const props = defineProps<{
  value: boolean
}>()

const emits = defineEmits<{
  (e: 'update:value'): void
}>()


</script>

<template>
  <div>
    <input hidden />
    {{value}}
  </div>
</template>
