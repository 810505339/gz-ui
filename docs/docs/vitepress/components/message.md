<script setup lang="ts">
  import { useMessage } from '@gz-ui/components/Message'
  const message=useMessage()

  function handleClick(){
  message.info('this is info',{
    closable:true
  })
  }
</script>

# Message 消息提示
常用于主动操作后的反馈提示。

## 基础用法
从顶部出现，3 秒后自动消失。


<gz-button @click="handleClick">点击</gz-button>
