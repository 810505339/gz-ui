<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

 <gz-input v-model:value="input" placeholder="Please input" w="250px" />

 ```vue
<gz-input v-model:value="input" placeholder="Please input"  w="250px"/>
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
 ```

## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件

 <gz-input v-model:value="input1" placeholder="Please input" disabled w="250px"  />

 ```vue
<gz-input v-model:value="input1" placeholder="Please input" w="250px" />
<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
</script>
 ```


## 一键清空
通过 `clearable` 属性即可得到一个可一键清空的输入框

 <gz-input v-model:value="input2" placeholder="Please input" clearable w="250px"   />

 ```vue
<gz-input v-model:value="input2" placeholder="Please input" clearable w="250px" />
<script lang="ts" setup>
import { ref } from 'vue'
const input2 = ref('')
</script>
 ```

## 密码框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<gz-input v-model:value="input3" type="password" placeholder="Please input password" show-password  w="250px"/>

```vue 
<gz-input v-model:value="input3" type="password" placeholder="Please input password" show-password w="250px" />

<script lang="ts" setup>
import { ref } from 'vue'
const input3 = ref('')
</script>
```
# 带图标的输入框
带有图标标记输入类型

要在输入框中添加图标，使用 `prefix` 和 `suffix` 命名的插槽

<div mb5>
<gz-input v-model:value="input4" placeholder="Please input"    w="250px">
   <template #suffix>
      <i i-heroicons-calendar-days-20-solid text-sm></i>
    </template>
</gz-input>
</div>

<gz-input v-model:value="input5" placeholder="Please input" clearable  w="250px">
   <template #prefix>
      <i i-heroicons:magnifying-glass text-sm></i>
    </template>
</gz-input>

```html
<div mb5>
<gz-input v-model:value="input4" placeholder="Please input"    w="250px">
   <template #suffix>
      <i i-heroicons-calendar-days-20-solid text-sm></i>
    </template>
</gz-input>
</div>

<gz-input v-model:value="input5" placeholder="Please input" clearable  w="250px">
   <template #prefix>
      <i i-heroicons:magnifying-glass text-sm></i>
    </template>
</gz-input>
<script setup lang="ts">
import { ref } from 'vue'
const input4 = ref('')
const input5 = ref('')

</script>
```

## API

### 属性
| 属性名        |         说明         |        类型 | 默认值 |
| ------------- | :------------------: | ----------: | ------ |
| type          |         类型         |    `string` | text   |
| v-model:value |        绑定值        |    `string` | —      |
| placeholder   |    输入框占位文本    |    `string` | —      |
| clearable     |   是否显示清除按钮   |   `boolean` | false  |
| show-password | 是否显示切换密码图标 |   `boolean` | false  |
| disabled      |       是否禁用       |   `boolean` | false  |
| prefix-icon   |    自定义前缀图标    | `Component` | —      |
| suffix-icon   |    自定义前缀图标    | `Component` | —      |

### 插槽

| 插槽名 |      说明      |
| ------ | :------------: |
| prefix | 输入框头部内容 |
| suffix | 输入框头部内容 |

## 事件
| 事件名 |                     说明                      |       类型 |
| ------ | :-------------------------------------------: | ---------: |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | `Function` |
| change |            仅当 modelValue 改变时             | `Function` |
