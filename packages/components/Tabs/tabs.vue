<script lang="ts">
export const TabsInjectionKey = 'tabs'
</script>
<script setup lang="ts">
import { ref, useSlots, computed, provide, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import tabNav from './tabNav.vue'


const props = withDefaults(defineProps<{
  value?: string,
}>(), {

})
const activeName = ref(props.value)

const emits = defineEmits<{
  (e: 'tabClick', pane: string, ev: Event): void,
  (e: 'update:value', name: string): void
}>()


const slotProps = computed(() => {
  const slotsDefault = useSlots().default?.() ?? []
  
  
  return slotsDefault.map(item => {

    return { ...item.props, uid: uuidv4(), active: props.value === item.props!.name, labelFn: item.children!.label }
  })
})



defineOptions({
  name: 'GzTabs'
})

//fn

function updateActive(name: string) {
  activeName.value = name
  emits('update:value', name)

}


provide(TabsInjectionKey, {
  activeName,
  updateActive
})

watch(() => props.value, (newVal) => {
  updateActive(newVal!)
})

</script>

<template>
  <tab-nav :navList="slotProps" />
  <div px20px py10px>
    <slot></slot>
  </div>
</template>
