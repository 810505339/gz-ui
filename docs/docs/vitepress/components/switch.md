<script setup lang="ts">
  import { ref} from 'vue'
  const value1=ref(true)
  const value2=ref(true)
  const value3=ref(true)
</script>

# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
## 基础用法
<gz-switch v-model:value="value1" />

```html

<gz-switch v-model:value="value1" />
<script setup lang="ts">
  import { ref} from 'vue'
  const value1=ref(true)
</script>

```

## 尺寸
<div>
<gz-switch v-model:value="value2"  />
</div>
<div>
<gz-switch v-model:value="value2" size="lg" />
</div>

```html

<div>
<gz-switch v-model:value="value2"  />
</div>
<div>
<gz-switch v-model:value="value2" size="lg" />
</div>

<script setup lang="ts">
  import { ref} from 'vue'
  const value2=ref(true)
</script>
```

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
<gz-switch v-model:value="value3" disabled mr2 />
<gz-switch v-model:value="value3"  />

```html
<gz-switch v-model:value="value3" disabled mr2 />
<gz-switch v-model:value="value3"  />


<script setup lang="ts">
  import { ref} from 'vue'
  const value3=ref(true)
</script>
```

## 文字描述
使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

<gz-switch v-model:value="value4"  active-text="是"
    inactive-text="否" />

```html
<gz-switch v-model:value="value4"  active-text="是"
    inactive-text="否" />

<script setup lang="ts">
  import { ref} from 'vue'
  const value4=ref(true)
</script>
```

## 属性

| 属性名        |               说明                |       类型 | 默认值 |
| ------------- | :-------------------------------: | ---------: | ------ |
| v-model:value |              绑定值               | `boolean ` | ——     |
| disabled      |             是否禁用              | `boolean ` | ——     |
| size          |           switch 的大小           |  `string ` | ——     |
| active-text   |      switch 打开时的文字描述      |  `string ` | ——     |
| inactive-text | switch 的状态为 `off`时的文字描述 |  `string ` | ——     |


## 事件
| 事件名 |              说明               |       类型 |
| ------ | :-----------------------------: | ---------: |
| change | switch 状态发生变化时的回调函数 | `Function` |
