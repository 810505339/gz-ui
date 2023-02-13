<script setup lang='ts'>
  import {ref} from 'vue'
const tags = ref([
  { name: 'Tag 1', type: 'default' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
  { name: 'Tag 6', type: 'primary' },
])

function close(tag){
  console.log(tag.name)
}
  
</script>

# Tag 标签
用于标记和选择。
## 基础用法
由 `type` 属性来选择 `tag` 的类型。

<div>
  <gz-tag ml-2>tag1</gz-tag>
  <gz-tag ml-2 type='success'>tag2</gz-tag>
  <gz-tag ml-2 type='info'>tag3</gz-tag>
  <gz-tag ml-2 type='warning'>tag4</gz-tag>
  <gz-tag ml-2 type='danger'>tag5</gz-tag>
  <gz-tag ml-2 type='primary'>tag6</gz-tag>
</div>

## 圆形标签

`tag` 可以向按钮组件一样变为完全圆形。

<div>
  <gz-tag v-for="tag in tags" :key="tag.name" ml-2  :type="tag.type" round @close="close(tag)">{{tag.name}}</gz-tag>
</div>


```html 
<div>
  <gz-tag ml-2>tag1</gz-tag>
  <gz-tag ml-2 type='success'>tag2</gz-tag>
  <gz-tag ml-2 type='info'>tag3</gz-tag>
  <gz-tag ml-2 type='warning'>tag4</gz-tag>
  <gz-tag ml-2 type='danger'>tag5</gz-tag>
  <gz-tag ml-2 type='primary'>tag6</gz-tag>
</div>

```

## 可移除标签
设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`

<div>
  <gz-tag v-for="tag in tags" :key="tag.name" ml-2  :type="tag.type" closable @close="close(tag)">{{tag.name}}</gz-tag>
</div>


```html 

<div>
  <gz-tag v-for="tag in tags" :key="tag.name" ml-2  :type="tag.type" closable @close="close(tag)">{{tag.name}}</gz-tag>
</div>
<script setup lang='ts'>
import {ref} from 'vue'

const tags = ref([
  { name: 'Tag 1', type: 'default' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
  { name: 'Tag 6', type: 'primary' },
])

function close(tag){
  console.log(tag.name)
}
  
</script>

```

## Tag 属性
| 属性名   |      说明      |      类型 | 默认值 |
| -------- | :------------: | --------: | ------ |
| type     |      类型      |  `string` | —      |
| closable |    closable    | `boolean` | false  |
| round    | Tag 是否为圆形 | `boolean` | false  |

## Tag 事件
| 事件名 |         说明          | 参数 |
| ------ | :-------------------: | ---: |
| click  | 点击 Tag 时触发的事件 |    — |
| close  | 关闭 Tag 时触发的事件 |    — |

