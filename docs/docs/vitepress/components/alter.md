<script setup lang="ts">
  function handleClose(){
      alert('Hello World!')
  }

</script>

# Alert提示

用于页面中展示重要的提示信息


# 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定。

<gz-alert title="default alert"  my20px/>
<gz-alert title="success alert" type="success" my20px/>
<gz-alert title="info  alert" type="info" my20px/>
<gz-alert title="warning  alert" type="warning" my20px/>
<gz-alert title="error  alert" type="error" my20px/>


```html

<gz-alert title="default alert"  my20px/>
<gz-alert title="success alert" type="success" my20px/>
<gz-alert title="info  alert" type="info" my20px/>
<gz-alert title="warning  alert" type="warning" my20px/>
<gz-alert title="error  alert" type="error" my20px/>

```

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。 你可以设置 `close-text` 属性来代替右侧的关闭图标， 需要注意的是 `close-text` 必须是一个字符串。 当 Alert 组件被关闭时会触发 `close` 事件。

<gz-alert  type="error" :closable="false" my20px>
  <template #title>
    这是title 插槽
  </template>
</gz-alert>
<gz-alert title="info  alert" type="info" closeText="close"  my20px @close="handleClose"/>


```html 
<gz-alert  type="error" :closable="false" my20px>
  <template #title>
    这是title 插槽
  </template>
</gz-alert>
<gz-alert title="info  alert" type="info" closeText="close"  my20px @close="handleClose"/>

<script setup lang="ts">
  function handleClose(){
      alert('Hello World!')
  }
</script>
```

## Alert API
### 属性
| 属性名   |     说明     |      类型 | 默认值 |
| -------- | :----------: | --------: | ------ |
| title    | Alert 标题。 |  `string` | —      |
| type     | Alert 类型。 |  `string` | —      |
| closable | 是否可以关闭 | `boolean` | `true` |

### 事件

| 名称  |          描述           |       类型 |
| ----- | :---------------------: | ---------: |
| close | 关闭 Alert 时触发的事件 | `Function` |

### 插槽
| 名称  |    描述    |
| ----- | :--------: |
| title | 标题的内容 |
