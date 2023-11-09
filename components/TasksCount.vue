<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <p>Tasks: {{ store.tasksCount }}</p>
</template>