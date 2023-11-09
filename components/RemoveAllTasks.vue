<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <button @click="store.removeAllTasks">
        Delete All Tasks
    </button>
</template>