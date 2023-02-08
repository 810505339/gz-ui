<script setup lang="ts">
import Input from '../Input/input.vue'
defineProps<{
  placeholder: string
  
}>()
</script>
<template>
  <div>
    <Input :placeholder="placeholder" />
  </div>
</template>
