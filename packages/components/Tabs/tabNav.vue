<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  navList?: any
}>(), {
  navList: []
})


//fn
function handleClick() {

}

//classFn

const ChildClass = (i: number) => {
  return i == 0 ? `pr20px` : `px20px`
}

const activeClass = (nav: any, e: MouseEvent) => {
  const target = (e.target) as HTMLLIElement
  const offsetLeft = target.offsetLeft
  console.log(offsetLeft);

}

</script>


<template>
  <div mb15px p0 flex items-center h40px relative transition-all class="
    after-content-empty
    after-absolute 
    after-w100% 
    after-bottom-0
    after-left-0 
    after-h3px
  after-bg-#52525952
  after-z-9
  before-content-empty
  before-bg-violet-500
  before-bottom-0
  before-absolute
  before-z-10
  before-w30px
  before-h3px
    ">
    <div v-for="(nav, index) in navList" :key="nav.uid" relative whitespace-nowrap leading-40px
      :class="[ChildClass(index), `${index === navList.length - 1 ? 'pr0' : ''}`]" hover:text-violet-500 cursor-pointer
      @click="handleClick(nav, $event)">
      {{ nav.label }}
    </div>
  </div>

</template>

