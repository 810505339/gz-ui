<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

 <gz-input v-model:value="input" placeholder="Please input" />

 ```vue
<gz-input v-model:value="input" placeholder="Please input" />
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
 ```

## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件

 <gz-input v-model:value="input1" placeholder="Please input" disabled  />

 ```vue
<gz-input v-model:value="input1" placeholder="Please input" />
<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
</script>
 ```


## 一键清空
通过 `clearable` 属性即可得到一个可一键清空的输入框

 <gz-input v-model:value="input2" placeholder="Please input" clearable   />

 ```vue
<gz-input v-model:value="input2" placeholder="Please input" clearable />
<script lang="ts" setup>
import { ref } from 'vue'
const input2 = ref('')
</script>
 ```

## 密码框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<gz-input v-model:value="input3" type="password" placeholder="Please input password" show-password />

```vue 
<gz-input v-model:value="input3" type="password" placeholder="Please input password" show-password />

<script lang="ts" setup>
import { ref } from 'vue'
const input3 = ref('')
</script>
```
# 带图标的输入框
带有图标标记输入类型

要在输入框中添加图标，使用 `prefix` 和 `suffix` 命名的插槽

<gz-input v-model:value="input2" placeholder="Please input" clearable mb5 >
   <template #suffix>
      <i i-heroicons-calendar-days-20-solid text-sm></i>
    </template>
</gz-input>

<gz-input v-model:value="input2" placeholder="Please input" clearable >
   <template #prefix>
      <i i-heroicons:magnifying-glass text-sm></i>
    </template>
</gz-input>
