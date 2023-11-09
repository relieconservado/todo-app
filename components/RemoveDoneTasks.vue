<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <div v-if="store.tasksDoneCount">
        <v-btn @click="store.removeDoneTasks" class="ma-2" color="red">
            Tasks Done
            <v-icon end icon="mdi-delete"></v-icon>
        </v-btn>
    </div>
</template>