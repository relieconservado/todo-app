<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()

const changeStatus = (index) => {
    store.changeTaskStatus(index)
}
</script>

<template>
    <div>
        <p v-for="(task, index) in store.getTasks" :key="task.id" @click="changeStatus(index)">{{ task.name }} - {{
            task.status.done ? 'done' : 'not done' }}</p>
    </div>
</template>