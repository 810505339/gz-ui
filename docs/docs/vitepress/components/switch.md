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

<gz-switch v-model:value="value1"  active-text="是"
    inactive-text="否" />
