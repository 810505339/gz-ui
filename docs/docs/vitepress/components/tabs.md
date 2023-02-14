<script setup lang="ts">
import {ref} from 'vue'
const activeName = ref('fourth')
const activeName1 = ref('first')
const activeName2 = ref('first')
</script>
# Tabs 标签页

## 基础用法
基础的、简洁的标签页。
Tabs 通过 `value` 属性来指定当前选中的标签页。

分隔内容上有关联但属于不同类别的数据集合。

<gz-tabs v-model:value="activeName">
    <gz-tab-pane label="User" name="first">User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second">Config</gz-tab-pane>
    <gz-tab-pane label="Role" name="third">Role</gz-tab-pane>
    <gz-tab-pane label="Task" name="fourth">Task</gz-tab-pane>
</gz-tabs>

```html

<gz-tabs v-model:value="activeName">
    <gz-tab-pane label="User" name="first">User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second">Config</gz-tab-pane>
    <gz-tab-pane label="Role" name="third">Role</gz-tab-pane>
    <gz-tab-pane label="Task" name="fourth">Task</gz-tab-pane>
</gz-tabs>

<script setup lang="ts">
import {ref} from 'vue'
const activeName = ref('fourth')
</script>

```

## 自定义标签页的内容
可以通过具名插槽来实现自定义标签页的内容

<gz-tabs v-model:value="activeName1">
    <gz-tab-pane  name="first">
        <template #label>
            <div flex items-center>
             <i i-heroicons:magnifying-glass text-sm block></i>
            <span ml2px>搜索</span>
            </div>
        </template>
        搜索
    </gz-tab-pane>
    <gz-tab-pane  name="second">
          <template #label>
            <div flex items-center>
             <i i-heroicons:adjustments-horizontal text-sm block></i>
            <span ml2px>设置</span>
            </div>
        </template>
        设置
    </gz-tab-pane>
</gz-tabs>

```html

<gz-tabs v-model:value="activeName1">
    <gz-tab-pane  name="first">
        <template #label>
            <div flex items-center>
             <i i-heroicons:magnifying-glass text-sm block></i>
            <span ml2px>搜索</span>
            </div>
        </template>
        搜索
    </gz-tab-pane>
    <gz-tab-pane  name="second">
          <template #label>
            <div flex items-center>
             <i i-heroicons:adjustments-horizontal text-sm block></i>
            <span ml2px>设置</span>
            </div>
        </template>
        设置
    </gz-tab-pane>
</gz-tabs>

<script setup lang="ts">
import {ref} from 'vue'
const activeName1 = ref('first')
</script>
```

## 设置是否可选中面板
可以通过`disabled`属性是否禁止选中

<gz-tabs v-model:value="activeName2">
    <gz-tab-pane label="User" name="first" >User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second" disabled="true">Config</gz-tab-pane>
</gz-tabs>

```html

<gz-tabs v-model:value="activeName2">
    <gz-tab-pane label="User" name="first" >User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second" disabled="true">Config</gz-tab-pane>
</gz-tabs>

<script setup lang="ts">
import {ref} from 'vue'
const activeName2 = ref('first')
</script>
```




## Tabs 属性

| 属性名        |           说明            |      类型 | 默认值 |
| ------------- | :-----------------------: | --------: | ------ |
| v-model:value | 绑定值，选中选项卡的 name | `string ` | —      |


## Tabs 事件

| 事件名    |          说明           |                               回调参数 |
| --------- | :---------------------: | -------------------------------------: |
| tab-click |    tab 被点击时触发     | (pane: `TabsPaneContext`, ev: `Event`) |
| tab-click | `activeName` 改变时触发 |                        (name:`string`) |

## Tabs 插槽
| 插槽名 |   说明   |     子标签 |
| ------ | :------: | ---------: |
| -      | 默认插槽 | `Tab-pane` |

## Tab-pane 属性


| 属性名        |           说明            |      类型 | 默认值 |
| ------------- | :-----------------------: | --------: | ------ |
| v-model:value | 绑定值，选中选项卡的 name | `string ` | ——     |
| name          |        选项卡标题         | `boolean` | false  |
| disabled      |         是否禁用          | `boolean` | false  |
| label         |        选项卡标题         |  `string` | ——     |

## Tab-pane 插槽
| 插槽名 |        说明         |
| ------ | :-----------------: |
| -      |   Tab-pane 的内容   |
| label  | Tab-pane 的标题内容 |
