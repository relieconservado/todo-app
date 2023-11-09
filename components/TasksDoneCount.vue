<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <p>Done: {{ store.tasksDoneCount }}</p>
</template>