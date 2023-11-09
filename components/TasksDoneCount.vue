<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <v-chip class="chip ma-2 justify-center align-center" variant="outlined">
        Tasks Done
        <div class="count d-flex justify-center align-center">{{ store.tasksDoneCount }}</div>
    </v-chip>
</template>

<style scoped>
.chip {
    position: relative;
    background: #356CD6;
    color: white;
    font-weight: 500;
}

.count {
    color: black;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    position: relative;
    right: -10px;
    background: white;
    color: #356CD6;
}
</style>