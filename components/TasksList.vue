<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
</script>

<template>
    <v-list class="list">
        <v-list-item class="list-item" v-for="(task, index) in store.getTasks" :key="task.id">
            <div class="d-flex justify-space-between">
                <div :class="[task.status.done ? 'done' : '']">
                    <v-icon @click="store.changeTaskStatus(index)" :color="!task.status.done ? 'success' : ''"
                        icon="mdi-check-circle" size="large"></v-icon>
                    <span class="content">{{ task.name }}</span>
                </div>
                <v-icon class="delete" @click="store.removeTask(index)" end icon="mdi-delete" color="error"
                    size="large"></v-icon>
            </div>
        </v-list-item>
    </v-list>
</template>

<style scoped>
.list {
    height: 194px;
    padding: 10px;
}

.list-item {
    margin: 10px 0;
    border: 1px solid #C1C1C1;
    border-radius: 5px;
    font-weight: bold;
}

.list-item:hover {
    background: #C1C1C1;
}

.delete {
    display: none;
}

.list-item:hover .delete {
    display: block;
}

.content {
    padding-left: 5px;
}

.done {
    color: gray;
    text-decoration: line-through;
}
</style>