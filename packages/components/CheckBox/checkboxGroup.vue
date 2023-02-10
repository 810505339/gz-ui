<script lang="ts">
export const checkboxGroupInjectionKey = 'checkbox-group'
</script>
<script setup lang="ts">
import { provide, ref } from 'vue';
defineOptions({
  name: 'gzCheckboxGroup'
})


const { value } = defineProps<{ value: Array<string | number> | null }>()
const emits = defineEmits<{
  (e: 'update:value', value: Array<string | number>): void
}>()
const valueSetRef = ref(value)
function toggleCheckbox(
  checked: boolean,
  checkboxValue: string | number
): void {
  const groupValue = Array.from(valueSetRef.value || [])
  const index = groupValue.findIndex(value => value === checkboxValue)

  if (checked) {
    if (!~index) {
      groupValue.push(checkboxValue)
    }
  } else {
    if (~index) {
      groupValue.splice(index, 1)
    }
  }
  valueSetRef.value = groupValue
  emits('update:value', groupValue)
  console.log(groupValue);

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
