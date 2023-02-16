<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const handleClose=(done: () => void)=>{
   alert('close!')
    done()
}
</script>
# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置`v-model:value` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。
<gz-button @click="dialogVisible=true">弹出层</gz-button>
<gz-dialog  v-model:value="dialogVisible"  :before-close="handleClose"
    title="标题" width="30%">
    <div>
    这是一个弹出层
    </div>
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible = false" mr8>取消</gz-button>
        <gz-button type="info" @click="dialogVisible = false">
          确定
        </gz-button>
      </div>
    </template>
    </gz-dialog>

```html

<gz-button @click="dialogVisible=true">弹出层</gz-button>
<gz-dialog  v-model:value="dialogVisible" :before-close="handleClose"
    title="Tips" width="30%" >
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible = false" mr8>Cancel</gz-button>
        <gz-button type="info" @click="dialogVisible = false">
          Confirm
        </gz-button>
      </div>
    </template>
    </gz-dialog>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
const handleClose=(done: () => void)=>{
  alert('close!')
    done()
}
</script>
```

# 自定义头部
`header` 可用于自定义显示标题的区域。
<gz-button @click="dialogVisible1=true" type="info">个人信息</gz-button>

<gz-dialog  v-model:value="dialogVisible1" 
     width="30%" >
      <span>这是个人信息弹窗</span>
     <template #header={close}>
     <span>个人信息</span>
     <gz-button type="error" @click="close">关闭</gz-button>
     </template>
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible1 = false" mr8>Cancel</gz-button>
        <gz-button type="info" @click="dialogVisible1 = false">
          Confirm
        </gz-button>
      </div>
    </template>
</gz-dialog>


```html
<gz-button @click="dialogVisible1=true" type="info">个人信息</gz-button>

<gz-dialog  v-model:value="dialogVisible1" 
     width="30%" >
      <span>这是个人信息弹窗</span>
     <template #header={close}>
     <span>个人信息</span>
     <gz-button type="error" @click="close">关闭</gz-button>
     </template>
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible1 = false" mr8>Cancel</gz-button>
        <gz-button type="info" @click="dialogVisible1 = false">
          Confirm
        </gz-button>
      </div>
    </template>
</gz-dialog>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible1 = ref(false)
</script>

```
## 点击遮罩层关闭
可以点击遮罩层关闭

<gz-button @click="dialogVisible2=true" type="info">遮罩层关闭</gz-button>

<gz-dialog  v-model:value="dialogVisible2"  :close-on-click-modal="true"
    title="Tips" width="30%" >
    遮罩层关闭
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible2 = false" mr8>Cancel</gz-button>
        <gz-button type="info" @click="dialogVisible2 = false">
          Confirm
        </gz-button>
      </div>
    </template>
    </gz-dialog>

```html

<gz-button @click="dialogVisible2=true" type="info">遮罩层关闭</gz-button>

<gz-dialog  v-model:value="dialogVisible2"  :close-on-click-modal="true"
    title="Tips" width="30%" >
    遮罩层关闭
     <template #footer>
      <div text="right">
        <gz-button @click="dialogVisible2 = false" mr8>Cancel</gz-button>
        <gz-button type="info" @click="dialogVisible2 = false">
          Confirm
        </gz-button>
      </div>
    </template>
    </gz-dialog>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible2 = ref(false)
</script>


```

## 属性

| 属性名        |             说明             |                                    类型 | 默认值  |
| ------------- | :--------------------------: | --------------------------------------: | ------- |
| v-model:value |        是否打开遮罩层        |                               `boolean` | `false` |
| show-close    |       是否显示关闭按钮       |                               `boolean` | `true`  |
| before-close  | 关闭前的回调 ,done()回调参数 | `Function(done) (done 用来关闭 Dialog)` | 无      |
| width         |        Dialog 的宽度         |                                `string` | `50%`   |
| title         |             标题             |                                `string` | ————    |

## 插槽
| 插槽名 |                          说明                          |
| ------ | :----------------------------------------------------: |
| —      |                     Dialog 的内容                      |
| header | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| footer |                Dialog 按钮操作区的内容                 |


