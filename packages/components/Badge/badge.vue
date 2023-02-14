<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'gzBadge'
})
const props = withDefaults(defineProps<{
  value?: number | string,
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default',
  isDot?: boolean,
  max?: number
}>(), {
  isDot: false,
  type: 'default'
})
console.log(props.isDot);

//classFN

const classByType = computed(() => {
  const obj = {
    default: `bg-violet-500`,
    primary: `bg-green-500`,
    info: `bg-blue-500`,
    success: `bg-green-600`,
    warning: ` bg-orange-500`,
    danger: `bg-red-500`
  }

  return obj[props.type]
})

const showMax = computed(() => {
  return props.max && typeof props.value === 'number' && props.value >= props.max
})


//computed
const calc = computed(() => {
  if (typeof props.value === 'number' && props.max) {
    if (props.value >= props.max) {
      return `${props.max}+`
    }
    else {
      return props.value
    }
  }
})

</script>

<template>
  <div inline-block relative>
    <div absolute right-10px top-0 translate-y="-50%" translate="100%" z-10 :class="[classByType]" box-border  px8px rounded-full text-12px v-if="value">
      <template v-if="showMax">{{ calc }}</template>
      <template v-else> {{ value }}</template>
    </div>
    <div absolute top--5px right--5px z-10 :class="[classByType]" v-if="!value && isDot" w8px h8px rounded-xl></div>
    <slot></slot>
  </div>
</template>
