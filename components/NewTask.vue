<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()

const new_task = ref()
const addTask = () => {
    if (!new_task.value) return
    store.addTask(new_task.value)
    new_task.value = ''
}
</script>

<template>
    <div class="new-task-container">
        <v-text-field class="new-task-input" v-model="new_task" :loading="loading" density="compact" variant="solo"
            label="New Task" append-inner-icon="mdi-plus" single-line hide-details @click:append-inner="addTask"
            @keyup.enter="addTask"></v-text-field>
    </div>
</template>

<style scoped>
.new-task-container {
    padding: 10px;
    width: 100%;
}

.new-task-input {
    border: 2px solid #276FB6;
}
</style>