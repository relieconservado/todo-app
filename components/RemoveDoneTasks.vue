<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <div v-if="store.tasksDoneCount">
        <button @click="store.removeDoneTasks">
            Delete Done Tasks ({{ store.tasksDoneCount }})
        </button>
    </div>
</template>