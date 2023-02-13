<script setup lang="ts">
import {ref} from 'vue'
const activeName = ref('fourth')
function handleClick(){
        activeName.value='first'
}

</script>
# tabs

<gz-tabs v-model:value="activeName">
    <gz-tab-pane label="User" name="first">User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second">Config</gz-tab-pane>
    <gz-tab-pane label="Role" name="third">Role</gz-tab-pane>
    <gz-tab-pane label="Task" name="fourth">Task</gz-tab-pane>
</gz-tabs>


