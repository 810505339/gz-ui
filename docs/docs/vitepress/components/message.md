<script setup lang="ts">
  import { useMessage } from '@gz-ui/components'
  const message=useMessage()

  function handleClick(){
  message.info('this is info')
  }
  function handleClick1(){
  message.error('this is error')
  }
  function handleClick2(){
  message.success('this is success')
  }
  function handleClick3(){
  message.warning('this is warning ')
  }

  function handleClick5(){
  message.info('五秒真男人噢!',{
    duration:5000
  })
  }

  function handleClick6(){
      message.info('这个可以关闭哦',{
    closable:true
  })
  }

  
</script>

# Message 消息提示
常用于主动操作后的反馈提示。

:::warning
如果你想使用信息，你需要把调用其方法的组件放在 gz-message-provider 内部并且使用 useMessage 去获取 API
:::

例如
```html
<!-- App.vue -->
<n-message-provider>
  <content />
</n-message-provider>
```
## 基础用法
从顶部出现，3 秒后自动消失。


<gz-button @click="handleClick" mr5>info</gz-button>
<gz-button @click="handleClick1" type="error" mr5>error</gz-button>
<gz-button @click="handleClick2" type="success" mr5>success </gz-button>
<gz-button @click="handleClick3" mr5 type="warning">warning</gz-button>


```html

<gz-button @click="handleClick" mr5>info</gz-button>
<gz-button @click="handleClick1" type="error" mr5>error</gz-button>
<gz-button @click="handleClick2" type="success" mr5>success </gz-button>
<gz-button @click="handleClick3" mr5 type="warning">warning</gz-button>

<script setup lang="ts">
  import { useMessage } from '@gz-ui/components/Message'
  const message=useMessage()

  function handleClick(){
  message.info('this is info')
  }
  function handleClick1(){
  message.error('this is error')
  }
  function handleClick2(){
  message.success('this is success')
  }
  function handleClick3(){
  message.warning('this is warning ')
  }
  
</script>


```

## 时间
设定 Message 的持续时间。
<gz-button @click="handleClick5" ghost mr5>持续五秒</gz-button>

```html
<gz-button @click="handleClick5" ghost mr5>持续五秒</gz-button>

<script setup lang="ts">
  function handleClick5(){
  message.info('五秒真男人噢!',{
    duration:5000
  })
  }
</script>

```
## 可关闭
设定 `closable` 使 Message 可以通过点击关闭。
<gz-button @click="handleClick6" type="error" mr5>可关闭</gz-button>

``` html
<gz-button @click="handleClick6" type="error" mr5>可关闭</gz-button>

<script setup lang="ts">
    function handleClick6(){
      message.info('这个可以关闭哦',{
    closable:true
  })
  }
</script>
```

## Message API
### Message 配置项

| 属性名   |   说明   |    类型 | 默认值 |
| -------- | :------: | ------: | ------ |
| type | 消息类型 | `string` | `default` |
| duration     |   显示时间，单位为毫秒。 设为 0 则不会自动关闭   |  `number` | 3000     |
| closable    |   是否可以关闭   | `boolean` | false  |

### hooks

| 名称   |   说明   |    
| -------- | ------ | 
| useMessage | 创建message |

