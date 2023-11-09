<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <v-btn @click="store.removeAllTasks" class="ma-2" color="red">
        Tasks
        <v-icon end icon="mdi-delete"></v-icon>
    </v-btn>
</template>