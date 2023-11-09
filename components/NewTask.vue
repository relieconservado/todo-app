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
    <input type="text" v-model="new_task">
    <button @click="addTask">
        Add Task
    </button>
</template>