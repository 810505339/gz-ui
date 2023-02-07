<script setup lang="ts">
import { inject, useSlots } from 'vue';
import { checkboxGroupInjectionKey } from './checkboxGroup.vue';

const props = defineProps<{
  checked?: boolean,
  label?: string,
  value: string
}>()
const emits = defineEmits<{
  (e: 'update:checked', value: string): void
}>()
const slotDefault = !!useSlots().default;
const checkboxInject = inject<any>(checkboxGroupInjectionKey)

//点击修改checkbox
function change(e: Event) {
  const checked = (e.target as HTMLInputElement)?.value
  console.log(checked);

  emits('update:checked', checked)
  checkboxInject.toggleCheckbox(checked, props.value)
}

</script>
<template>
  <div cursor-pointer @click="">
    <input type="checkbox" :value="checked" @change="change" />
    <slot v-if="slotDefault" />
    <template v-else>
      {{ label }}
    </template>

  </div>
</template>
