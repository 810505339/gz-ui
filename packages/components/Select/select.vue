<script setup lang="ts">
import { computed, ref } from 'vue';
import Input from '../Input/input.vue'
import type { OnClickOutsideHandler } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
defineProps<{
  placeholder?: string

}>()

//是否展开
const isOpen = ref(false)

const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  isOpen.value = false
}


//fn
function inputClick() {
  console.log('inputClick');
  isOpen.value = !isOpen.value

}
//classFn
const iconClass = computed(() => {
  return `${isOpen.value ? 'rotate--180' : ''}`
})
</script>
<template>
  <div relative>
    <Input :placeholder="placeholder" @click.stop="inputClick" readonly>
    <template #suffix>
      <i h12px w12px text-sm i-heroicons-chevron-down transition-all duration-300 :class="iconClass"></i>
    </template>
    </Input>
    <div v-if="isOpen" v-on-click-outside.bubble="dropdownHandler" min-w-200px bg-white py2 absolute z-10 shadow>
        <transition-group tag="ul" text-center  name="fade" mode="out-in"  appear>
          <slot></slot>
        </transition-group>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
