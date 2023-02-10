<script setup>
import Button from '@gz-ui/components/Button/button.vue'
</script>


# Button 按钮
常用的操作按钮。

## 基础用法
使用  `type` 来定义按钮的样式



<div>
<Button >Default</Button>
<Button type="primary" ml4>Primary</Button>
<Button type="success" ml4>Success</Button>
<Button type="info" ml4>Info</Button>
<Button type="warning" ml4>Warning</Button>
<Button type="error" ml4>Error</Button>
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
<Button disabled>Default</Button>
<Button type="primary" ml4 disabled>Primary</Button>
<Button type="success" ml4 disabled>Success</Button>
<Button type="info" ml4 disabled>Info</Button>
<Button type="warning" ml4 disabled>Warning</Button>
<Button type="error" ml4 disabled>Error</Button>
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
<Button size='sm' >小一点</Button>
<Button    ml4>大一点</Button>

</div>

```vue 
<gz-button  size='sm'>小一点</gz-button>
<gz-button  size='lg'>大一点</gz-button>
```

## 文字填充
使用 `ghost` 属性来控制按钮是否为文字状态。

<div>
<Button ghost>Default</Button>
    <Button type="primary" ghost ml4>
      Primary
    </Button>
    <Button type="info" ghost ml4>
      Info
    </Button>
    <Button type="success" ghost ml4>
      Success
    </Button>
    <Button type="warning" ghost ml4>
      Warning
    </Button>
    <Button type="error" ghost ml4>
      Error
    </Button>
</div>

``` vue
<gz-button ghost>Default</gz-button>
<gz-button type="primary" ghost ml4>Primary</gz-button>
<gz-button type="info" ghost ml4>Info</gz-button>
<gz-button type="success" ghost ml4>Success</gz-button>
<gz-button type="warning" ghost ml4>Warning</gz-button>
<gz-button type="error" ghost ml4>Error</gz-button>
```

## Button Api
### Button 属性

| 属性名   |   说明   |    类型 | 默认值 |
| -------- | :------: | ------: | ------ |
| type     | 按钮类型 |  string | 无     |
| disabled | 禁用状态 | boolean | false  |
| size     |   尺寸   |  string | lg     |
| ghost    |   文字   | boolean | false  |

### Button 插槽

| 插槽名  |     插槽名     |
| ------- | :------------: |
| default | 自定义默认内容 |
