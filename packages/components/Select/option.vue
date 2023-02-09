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
  <li relative overflow-hidden h32px  text-ellipsis  leading-32px hover="bg-gray-100" cursor-pointer>
    <span>{{ label }}</span>
  </li>
</template>
