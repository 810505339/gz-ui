<script setup lang="ts">
import Button from "@/components/Button/button.vue"
import checkbox from '@/components/CheckBox/checkbox.vue'
import checkboxGroup from '@/components/CheckBox/checkboxGroup.vue'
import datePicker from '@/components/DatePicker/datePicker.vue'
import Input from '@/components/Input/input.vue'
import Select from '@/components/Select/select.vue'
import Option from '@/components/Select/option.vue'
import { computed, ref } from "vue";
const cities = ref(['Beijing'])
const checked = ref(true)
const select = ref(false)
const checkedLabel = computed(() => checked.value ? '选中' : '未选中')
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')



const selectValue = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]



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
  {{ cities }}
  <checkbox-group v-model:value="cities">
    <div flex>
      <checkbox value="Beijing" label="北京" />
      <checkbox value="Shanghai" label="上海" />
      <checkbox value="Guangzhou" label="广州" />
      <checkbox value="Shenzen" disabled>深圳</checkbox>
    </div>

  </checkbox-group>
  受控组件
  <Button @click="select = true">选中</Button>
  <Button @click="select = false">不选中</Button>
  {{ select }}
  <checkbox value="1" :checked="select">{{ checkedLabel }}</checkbox>
  <div>
    尺寸
    <checkbox size="lg">大</checkbox>
    <checkbox size="sm">小</checkbox>
  </div>

  <div>
    <Input placeholder="Please input" v-model:value="input" w="50" />
    <Input placeholder="Please input" v-model:value="input1" disabled></Input>
    <Input placeholder="Please input" v-model:value="input2" type="password" show-password />
    <Input placeholder="Please input" v-model:value="input3" type="textarea" />

    图标：
    <Input>
    <template #suffix>
      <i i-heroicons-calendar-days-20-solid text-sm></i>
    </template>
    <template #prefix>
      <i i-heroicons-calendar-days-20-solid text-sm></i>
    </template>
    </Input>
  </div>

  <div mt5>
    <date-picker></date-picker>
  </div>

  <div>
    <label>select</label>
    <Select>
      <Option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
        :disabled="item.disabled" />
    </Select>
  </div>
</template>
