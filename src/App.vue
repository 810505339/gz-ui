<script setup lang="ts">
import Button from "@/components/Button/button.vue"
import checkbox from '@/components/CheckBox/checkbox.vue'
import checkboxGroup from '@/components/CheckBox/checkboxGroup.vue'
import { ref } from "vue";
const cities = ref([])
function handleClick() {
  alert(1)
}
</script>

<template >
  <div flex justify-center>
    <Button>Default</Button>
    <Button type="primary" @click="">
      Primary
    </Button>
    <Button type="info">
      Info
    </Button>
    <Button type="success">
      Success
    </Button>
    <Button type="warning">
      Warning
    </Button>
    <Button type="error">
      Error
    </Button>
  </div>

  <div flex justify-center>
    <div>小一点的版本</div>
    <Button size="sm" @click="handleClick">Default</Button>
    <Button type="primary" size="sm">
      Primary
    </Button>
    <Button type="info" size="sm">
      Info
    </Button>
    <Button type="success" size="sm">
      Success
    </Button>
    <Button type="warning" size="sm">
      Warning
    </Button>
    <Button type="error" size="sm">
      Error
    </Button>
  </div>

  <div flex justify-center>
    <div>镂空版本</div>
    <Button ghost>Default</Button>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button type="info" ghost>
      Info
    </Button>
    <Button type="success" ghost>
      Success
    </Button>
    <Button type="warning" ghost>
      Warning
    </Button>
    <Button type="error" ghost>
      Error
    </Button>
  </div>
  <div flex justify-center>
    <div>禁止点击</div>
    <Button disabled @click="handleClick">Default</Button>
  </div>
  <checkbox-group v-model:value="cities">
    <div flex>
      <checkbox value="Beijing" label="北京" />
      <checkbox value="Shanghai" label="上海" />
      <checkbox value="Guangzhou" label="广州" />
      <checkbox value="Shenzen">深圳</checkbox>
    </div>
  </checkbox-group>
</template>
