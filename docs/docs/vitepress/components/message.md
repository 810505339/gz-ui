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

  function handleClick5(){
  message.info('五秒真男人噢!',{
    duration:5000
  })
  }

  
</script>

# Message 消息提示
常用于主动操作后的反馈提示。

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
