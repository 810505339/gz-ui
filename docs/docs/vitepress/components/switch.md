<script setup lang="ts">
  import { ref} from 'vue'
  const value1=ref(true)
</script>

# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
## 基础用法

<gz-switch v-model:value="value1" />
