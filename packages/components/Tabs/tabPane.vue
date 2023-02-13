<script setup lang="ts">
import { inject, defineProps, watch, ref, mergeProps } from 'vue';
import { TabsInjectionKey } from './tabs.vue';



defineOptions({
  name: 'GzTabPane'
})


const props = withDefaults(defineProps<{
  label?: string
  disabled?: boolean
  name?: string
  closable?: boolean
}>(), {
  closable: false,
  disabled: false,
})
const TabsInject = inject<any>(TabsInjectionKey)
const isShow = ref(false)

watch(() => TabsInject.activeName.value, (newVal) => {
  isShow.value = newVal === props.name

}, {
  immediate: true
})
</script>

<template>
  <div v-show="isShow">
    <slot></slot>
  </div>
</template>
