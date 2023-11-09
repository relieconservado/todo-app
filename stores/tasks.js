import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: []
    }),
    getters: {
        getTasks: (state) => state.tasks,
        tasksCount: (state) => state.tasks.length,
        tasksDoneCount: (state) => {
            const tasks_done = useFilter(state.tasks, (task) => {
                return task.status.done
            })
            return tasks_done.length
        },
    },
    actions: {
        addTask(name) {
            const last_task = useLast(useSortBy(this.tasks, ['id']))
            const id = last_task ? last_task.id + 1 : 1
            this.tasks.push({
                id: id,
                name: name,
                status: {
                    done: false
                }
            });
        },
        changeTaskStatus(index) {
            this.tasks[index].status.done = !this.tasks[index].status.done
        },
        removeDoneTasks() {
            useRemove(this.tasks, (task) => {
                return task.status.done === true
            })
        },
        removeAllTasks() {
            this.tasks = [];
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})