<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>
# Dialog 对话框

<gz-dialog  v-model:value="dialogVisible"
    title="Tips" width="30%"></gz-dialog>


