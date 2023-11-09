<script setup>
import { useTaskStore } from '~/stores/tasks'
const store = useTaskStore()
store.$hydrate({ runHooks: false })
</script>

<template>
  <ClientOnly>
    <TasksCount />
    <TasksDoneCount />
    <TasksList />
    <RemoveAllTasks />
    <RemoveDoneTasks />
    <NewTask />
    <LocalStorageNote />
  </ClientOnly>
</template>