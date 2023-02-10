<script setup lang="ts">
import {ref} from 'vue'
  const checked1=ref('')
  const checked2=ref('')
  const checked3=ref('')
  const checked4=ref('')
  const cities =ref(['Beijing'])
</script>

# Checkbox 多选框
在一组备选项中进行多选。


## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

`checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 Group 中使用 v-model 绑定 Array 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`,当选中时值为`true`。
`gz-checkbox` 标签中的内容将成为复选框按钮之后的描述。
<div>
    <gz-checkbox v-model:value="checked1" label="Option 1"  />
    <gz-checkbox v-model:value="checked2" label="Option 2"  />
</div>

``` vue

<gz-checkbox v-model:value="checked1" label="Option 1"  />
<gz-checkbox v-model:value="checked2" label="Option 2"  />

<script setup lang="ts">
import {ref} from 'vue'
  const checked1=ref('')
  const checked2=ref('')
</script>

```

## 禁用状态

多选框不可用状态。

设置 `disabled` 属性即可。

<gz-checkbox v-model:value="checked3" disabled>Disabled</gz-checkbox>
<gz-checkbox v-model:value="checked4">Not disabled</gz-checkbox>

``` vue

<gz-checkbox v-model:value="checked3" label="Disabled"  />
<gz-checkbox v-model:value="checked4" label="Not disabled<"  />

<script setup lang="ts">
import {ref} from 'vue'
  const checked3=ref('')
  const checked4=ref('')
</script>

```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。


{{ cities }}
  <gz-checkbox-group v-model:value="cities">
    <div flex>
      <gz-checkbox value="Beijing" label="北京" />
      <gz-checkbox value="Shanghai" label="上海" />
      <gz-checkbox value="Guangzhou" label="广州" />
      <gz-checkbox value="Shenzen" disabled>深圳</gz-checkbox>
    </div>
  </gz-checkbox-group>


``` html

<gz-checkbox-group v-model:value="cities">
  <div flex>
    <gz-checkbox value="Beijing" label="北京" />
    <gz-checkbox value="Shanghai" label="上海" />
    <gz-checkbox value="Guangzhou" label="广州" />
    <gz-checkbox value="Shenzen" disabled>深圳</gz-checkbox>
  </div>
</gz-checkbox-group>

<script setup lang="ts">
import {ref} from 'vue'
const cities =ref(['Beijing'])
</script>

```

# 尺寸
  使用 size 属性来定义按钮尺寸大小。
<gz-checkbox value="大" label="大" size="lg" />
<gz-checkbox value="大" label="小" size="sm" />

``` vue

<gz-checkbox value="大" label="大" size="lg" />
<gz-checkbox value="大" label="小" size="sm" />

<script setup lang="ts">
import {ref} from 'vue'
</script>
``` 


## 多选框 API
### gz-checkbox 属性

| 属性名   |   说明   |    类型 | 默认值 |
| -------- | :------: | ------: | ------ |
| label    | 按钮类型 |  string | 无     |
| disabled | 禁用状态 | boolean | false  |
| size     |   尺寸   |  string | lg     |
| checked  | 是否勾选 | boolean | false  |


###  插槽

| 插槽名  |     插槽名     |
| ------- | :------------: |
| default | 自定义默认内容 |

# CheckboxGroup API


| 属性名        |    说明     |  类型 | 默认值 |
| ------------- | :---------: | ----: | ------ |
| v-model:value | v-model的值 | Array | []     |


###  插槽

| 插槽名  |     插槽名     |
| ------- | :------------: |
| default | 自定义默认内容 |
