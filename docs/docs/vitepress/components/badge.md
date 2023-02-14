# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法
可以用来展示新消息的数量。

数量值可接受 Number 或 String。

<div flex items-center>
<gz-badge type="danger" :value="12" mr10
>
  <gz-button>comments</gz-button>
</gz-badge>

<gz-badge type="primary" :value="1" mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="warning" :value="2" mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>

```html

<div flex items-center>
<gz-badge type="danger" :value="12" mr10>
  <gz-button>comments</gz-button>
</gz-badge>

<gz-badge type="primary" :value="1" mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="warning" :value="2" mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>
```

## 最大值

你还可以自定义最大值

由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。

<div flex items-center>
<gz-badge type="primary" :value="999" :max="99" mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="warning" :value="100" :max="10" mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>

```html

<div flex items-center>
<gz-badge type="primary" :value="999" :max="99" mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="warning" :value="100" :max="10" mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>

```

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。

当 value 是 String 时，可以显示自定义文字。


<div flex items-center>
<gz-badge type="danger" value="我喜欢你"  mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="danger" value="真的吗?"  mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>

```html
<div flex items-center>
<gz-badge type="danger" value="我喜欢你"  mr10>
  <gz-button ghost >primary</gz-button>
</gz-badge>

<gz-badge type="danger" value="真的吗?"  mr10>
  <gz-button type="warning" ghost >warning</gz-button>
</gz-badge>
</div>

```

## 小红点

<div flex items-center>
<gz-badge is-dot  mr10>
  query
</gz-badge>

<gz-badge type="danger" is-dot   mr10>
  <gz-button type="warning">
    <i i-heroicons:magnifying-glass block text-14px></i>
  </gz-button>
</gz-badge>
</div>

```html
<div flex items-center>
<gz-badge is-dot  mr10>
  query
</gz-badge>

<gz-badge type="danger" is-dot   mr10>
  <gz-button type="warning">
    <i i-heroicons:magnifying-glass block text-14px></i>
  </gz-button>
</gz-badge>
</div>

```

## API
### 属性
| 属性名 |                                 说明                                  |              类型 | 默认值 |
| ------ | :-------------------------------------------------------------------: | ----------------: | ------ |
| value  |                                显示值                                 | `string`/`number` | 无     |
| max    | 最大值，超过最大值会显示` {max}+`。 只有当 value 是数字类型时起作用。 |            number | -      |
| is-dot |                           是否显示小圆点。                            |         `boolean` | false  |
| type   |                              badge type.                              |            string | -      |

### 插槽
| 插槽名  |     说明     |
| ------- | :------------: |
| default | 自定义默认内容 |
