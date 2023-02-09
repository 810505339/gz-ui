<script setup lang="ts">
import Button from '@gz-ui/components/Button/Button.vue'
import checkbox from '@gz-ui/components/CheckBox/checkbox.vue'
import type {
  Instance,
  Modifier,
  Options,
  State,
  VirtualElement,
} from '@popperjs/core'

import checkboxGroup from '@gz-ui/components/CheckBox/checkboxGroup.vue'
import datePicker from '@gz-ui/components/DatePicker/datePicker.vue'
import Input from '@gz-ui/components/Input/input.vue'
import Select from '@gz-ui/components/Select/select.vue'
import Option from '@gz-ui/components/Select/option.vue'
import Tooltip from '@gz-ui/components/Tooltip/tooltip.vue'
import tag from '@gz-ui/components/Tag/tag.vue'
import { computed, ref } from "vue";
const cities = ref(['Beijing'])
const checked = ref(true)
const select = ref(false)
const checkedLabel = computed(() => checked.value ? '选中' : '未选中')
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')



const selectValue = ref('1')
const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
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
    <Input placeholder="Please clearable" v-model:value="input3" type="text" clearable />


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

  <div w="200px">
    <label>selectValue:{{ selectValue }}</label>
    <Button @click="selectValue = `3`">修改</Button>
    <Select placeholder="Select" w200px v-model:value="selectValue" :option="options">
      <Option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
        :disabled="item.disabled" />
    </Select>


  </div>

  <div>
    tooltip
    <Tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
      <Button>top-start</Button>
    </Tooltip>
  </div>

  <div>
    <tag>Tag1</tag>
    <tag class="ml-2" type="success">Tag2</tag>
    <tag class="ml-2" type="info">Tag3</tag>
    <tag class="ml-2" type="warning">Tag4</tag>
    <tag class="ml-2" type="danger">Tag5</tag>
    <tag class="ml-2" type="danger" closable>可关闭</tag>
  </div>
</template>
