<script setup lang="ts">
import { ref } from 'vue';
import Input from '../Input/input.vue'

import { vOnClickOutside } from '@vueuse/components'
defineProps<{
  placeholder?: string

}>()

//是否展开
const isOpen = ref(false)




//fn
function inputClick() {
  console.log('inputClick');
  isOpen.value = true

}
</script>
<template>

  <Input :placeholder="placeholder" readonly @click="inputClick">
  <template #suffix>
    <i i-heroicons-chevron-down h12px w12px text-sm v-show="isOpen"></i>
    <i i-heroicons-chevron-up h12px w12px text-sm></i>
  </template>
  </Input>
  <div v-show="isOpen" ref="target" relative>
    <ul text-center>
      <slot></slot>
    </ul>
   
  </div>
</template>
