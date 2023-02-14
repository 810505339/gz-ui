<script setup lang="ts">

import { computed, ref, inject, type StyleValue, watch, nextTick, h } from 'vue'
import { TabsInjectionKey } from './tabs.vue'
const props = withDefaults(defineProps<{
  navList?: any
}>(), {
  navList: []
})


const Tabsinject = inject<any>(TabsInjectionKey)
const offsetLeft = ref(0)
const doms = ref(null)

//fn
function handleClick(nav: any, e: MouseEvent) {
  if (nav.disabled) {
    return
  }
  Tabsinject.updateActive(nav.name)
}

function getOffsetLeft(newVal: string) {
  const targetList = doms.value! as HTMLElement[]

  const target = targetList?.find((dom) => dom.getAttribute('active') === 'true')



  let offset = 0
  offset = (target!.clientWidth - 40) / 2

  offsetLeft.value = target!.offsetLeft + offset
}

//classFn

const ChildClass = (i: number) => {
  return i == 0 ? `pr20px` : `px20px`
}

const activeClass = computed<StyleValue>(() => {
  return { transform: `translateX(${offsetLeft.value}px)` }
})

const activeBgClass = (nav: any) => {
  return `${nav.active ? 'text-violet-500' : ''}`
}

const disabledClass = (nav: any) => {
  return `${nav.disabled ? 'select-none cursor-not-allowed' : 'cursor-pointer'}`

}

watch(() => Tabsinject.activeName.value, (newVal) => {
  nextTick(() => {
    getOffsetLeft(newVal)
  })
}, {
  immediate: true
})



</script>


<template>
  <div mb15px p0 flex items-center h40px relative text-sm class="
    after-content-empty
    after-absolute 
    after-w100% 
    after-bottom-0
    after-left-0 
    after-h3px
  after-bg-#52525952
  after-z-9
    ">
    <div :style="activeClass" bg-violet-500 h3px absolute w40px bottom-0 left-0 transition-all></div>
    <div v-for="(nav, index) in navList" :key="nav.uid" relative whitespace-nowrap leading-40px box-content
      :class="[activeBgClass(nav), disabledClass(nav)]" hover:text-violet-500 px20px @click="handleClick(nav, $event)"
      :active="nav.active" ref="doms">
      {{ nav.label }}
      <component :is="nav.labelFn" v-if="!nav.label && nav.labelFn"></component>
    </div>
  </div>

</template>

