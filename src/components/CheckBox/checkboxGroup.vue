<script lang="ts">
export const checkboxGroupInjectionKey = 'checkbox-group'
</script>
<script setup lang="ts">
import { provide, ref } from 'vue';



const { value } = defineProps<{ value: Array<string | number> | null }>()
const emits = defineEmits()
const valueSetRef = ref(value)
function toggleCheckbox(
  checked: boolean,
  checkboxValue: string | number
): void {

}
provide(checkboxGroupInjectionKey, {
  valueSetRef,
  toggleCheckbox
})
</script>

<template>
  <div role="group">
    <slot></slot>
  </div>
</template>
