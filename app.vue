<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
store.$hydrate({ runHooks: false })
</script>

<template>
  <ClientOnly>
    <v-container class="container d-flex justify-center align-center">
      <div>
        <h2 class="title">Nuxt 3 ToDo List</h2>
        <v-card class="card">
          <v-card-title class="card-header d-flex justify-end align-center">
            <TasksCount />
            <TasksDoneCount />
            <RemoveDoneTasks />
            <RemoveAllTasks />
          </v-card-title>
          <v-card-text class="card-body">
            <TasksList />
          </v-card-text>
          <v-card-actions class="card-footer">
            <NewTask />
          </v-card-actions>
        </v-card>
      </div>

      <LocalStorageNote />
    </v-container>
  </ClientOnly>
</template>

<style>
body {
  background: linear-gradient(#36A77F, #254655);
}
</style>

<style scoped>
.container {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}

.title {
  font-size: 70px;
  text-align: center;
  color: white;
}

.card {
  min-width: 600px;
  border-radius: 0;
}

.card-header,
.card-footer {
  background: #E6E6DF;
}
</style>