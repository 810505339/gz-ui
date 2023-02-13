<script setup lang="ts">
import {ref} from 'vue'
const activeName = ref('first')
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
