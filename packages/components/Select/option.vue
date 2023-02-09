<script setup lang="ts">
import { defineProps, useSlots } from 'vue';
const props = defineProps<{
  label?: string
  disabled?: boolean
  value?: string
}>()
const slot = useSlots()


</script>
<template>
  <li>
    <span>{{ label }}</span>
  </li>
</template>
