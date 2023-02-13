<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>

<template>
  {{input}}
  <gz-input v-model:value="input"></gz-input>
  <gz-tabs>
    <gz-tab-pane :label="input" name="first">User</gz-tab-pane>
    <gz-tab-pane label="Config" name="second">Config</gz-tab-pane>
    <gz-tab-pane label="Role" name="third">Role</gz-tab-pane>
    <gz-tab-pane label="Task" name="fourth">Task</gz-tab-pane>
  </gz-tabs>
</template>
