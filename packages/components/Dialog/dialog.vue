<script setup lang="ts">
import { computed } from 'vue';

  defineOptions({
    name:'gzDialog'
  })
  const props=withDefaults(defineProps<{
    title?:string
    value?:boolean,
    width?:string
  }>(),{
    title:'title',
    value:false,
    width:'50%'
  })

  //classfn
  
</script>
<template>
  <div top="0" right="0" left="0" bottom="0" fixed h="100%" bg="black opacity-30" z="1000" box-border  >
    <div :style="{width:props.width}" ma mt="15vh" bg="#2c2c32"  shadow  rounded px20px pb10px>
      <header py20px>
        <span>{{title}}</span>
      </header>
      <div>123</div>
      <footer></footer>
    </div>
  </div>
</template>
