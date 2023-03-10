<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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

const options1=[
  {
    value: 'Option1',
    label: 'Option1',
    disabled:false
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
]
const options2=[
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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

const options3=[{
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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
  },]
</script>

# select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

<div>
  <gz-select v-model:value="value" class="m-2" placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gz-select>
  </div>

``` html

<div>
  <gz-select v-model:value="value1" class="m-2" placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gz-select>
  </div>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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
</script>

```

## 有禁用选项
在 `gz-option` 中，设定 `disabled` 值为 `true`，即可禁用该选项

<div>
  <gz-select v-model:value="value1" class="m-2" placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
       :disabled="item.disabled"
    />
  </gz-select>
  </div>

```html
<div>
  <gz-select v-model:value="value1" class="m-2" placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
       :disabled="item.disabled"
    />
  </gz-select>
  </div>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options1=[
  {
    value: 'Option1',
    label: 'Option1',
    disabled:false
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
]
</script>
```


## 禁用状态

禁用整个选择器组件

为 `gz-select` 设置 `disabled`属性，则整个选择器不可用。

<div>
  <gz-select v-model:value="value2" class="m-2"  disabled placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gz-select>
  </div>


```html 

<script lang="ts" setup>
import { ref } from 'vue'

const value2 = ref('')


const options2=[
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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
</script>

```

## 可清空单选
您可以使用清除图标来清除选择。
为 `gz-select` 设置 `clearable` 属性，则可将选择器清空。  


<div>
  <gz-select v-model:value="value3" class="m-2" clearable   placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gz-select>
  </div>


```html

<div>
  <gz-select v-model:value="value3" class="m-2" clearable   placeholder="Select" w="250px" :option="options" >
    <gz-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </gz-select>
  </div>

  <script lang="ts" setup>
import { ref } from 'vue'

const value3 = ref('')


const options3=[
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
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
</script>
```

## 无可选项

<div>
  <gz-select w="250px" placeholder="Select"/>

</div>

```html
<div>
  <gz-select w="250px" placeholder="Select"/>
</div>
```

## Select 属性

| 属性名        |       说明       |      类型 | 默认值 |
| ------------- | :--------------: | --------: | ------ |
| v-model:value |   选中项绑定值   |   `Array` | —      |
| disabled      |     是否多选     | `boolean` | false  |
| clearable     | 是否可以清空选项 | `boolean` | false  |


## Select 事件
| 事件名         |                   说明                   |                           回调参数 |
| -------------- | :--------------------------------------: | ---------------------------------: |
| change         |           选中值发生变化时触发           |                  val，目前的选中值 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 |                                  — |
| visible-change |          下拉框出现/隐藏时触发           | val，出现则为 true，隐藏则为 false |

## Select 插槽
| 插槽名 |      说明       |                  子标签 |
| ------ | :-------------: | ----------------------: |
| —      | Option 组件列表 | `Option Group / Option` |
| empty  | empty可空的文字 |                       — |

