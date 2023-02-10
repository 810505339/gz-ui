

# Button 按钮
常用的操作按钮。

## 基础用法
使用  `type` 来定义按钮的样式



<div>
<gz-button >Default</gz-button>
<gz-button type="primary" ml4>Primary</gz-button>
<gz-button type="success" ml4>Success</gz-button>
<gz-button type="info" ml4>Info</gz-button>
<gz-button type="warning" ml4>Warning</gz-button>
<gz-button type="error" ml4>Error</gz-button>
</div>

```vue 
<gz-button>Default</gz-button>
<gz-button type="primary">Primary</gz-button>
<gz-button type="success">Success</gz-button>
<gz-button type="info">Info</gz-button>
<gz-button type="warning">Warning</gz-button>
<gz-button type="error">Danger</gz-button>
```

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<div>
<gz-button disabled>Default</gz-button>
<gz-button type="primary" ml4 disabled>Primary</gz-button>
<gz-button type="success" ml4 disabled>Success</gz-button>
<gz-button type="info" ml4 disabled>Info</gz-button>
<gz-button type="warning" ml4 disabled>Warning</gz-button>
<gz-button type="error" ml4 disabled>Error</gz-button>
</div>

```vue 
<gz-button disabled>Default</gz-button>
<gz-button type="primary" disabled>Primary</gz-button>
<gz-button type="success" disabled>Success</gz-button>
<gz-button type="info" disabled>Info</gz-button>
<gz-button type="warning" disabled>Warning</gz-button>
<gz-button type="error" disabled>Danger</gz-button>
```

## 尺寸
你可以使用 `size` 属性来定义按钮尺寸大小。


<div>
<gz-button size='sm' >小一点</gz-button>
<gz-button    ml4>大一点</gz-button>

</div>

```vue 
<gz-button  size='sm'>小一点</gz-button>
<gz-button  size='lg'>大一点</gz-button>
```

## 文字填充
使用 `ghost` 属性来控制按钮是否为文字状态。

<div>
<gz-button ghost>Default</gz-button>
    <gz-button type="primary" ghost ml4>
      Primary
    </gz-button>
    <gz-button type="info" ghost ml4>
      Info
    </gz-button>
    <gz-button type="success" ghost ml4>
      Success
    </gz-button>
    <gz-button type="warning" ghost ml4>
      Warning
    </gz-button>
    <gz-button type="error" ghost ml4>
      Error
    </gz-button>
</div>

``` vue
<gz-button ghost>Default</gz-button>
<gz-button type="primary" ghost ml4>Primary</gz-button>
<gz-button type="info" ghost ml4>Info</gz-button>
<gz-button type="success" ghost ml4>Success</gz-button>
<gz-button type="warning" ghost ml4>Warning</gz-button>
<gz-button type="error" ghost ml4>Error</gz-button>
```

## gz-button Api
### gz-button 属性

| 属性名   |   说明   |    类型 | 默认值 |
| -------- | :------: | ------: | ------ |
| type     | 按钮类型 |  string | 无     |
| disabled | 禁用状态 | boolean | false  |
| size     |   尺寸   |  string | lg     |
| ghost    |   文字   | boolean | false  |

### gz-button 插槽

| 插槽名  |     插槽名     |
| ------- | :------------: |
| default | 自定义默认内容 |
