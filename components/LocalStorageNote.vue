<script setup>
const show = ref(true)
</script>

<template>
    <div class="text-center">
        <v-chip v-if="show" class="note" closable @click:close="show = false">
            This application uses the browser's Local Storage to store data
        </v-chip>

        <v-btn class="note close-note" v-if="!show" close @click="show = true">
            Show info
        </v-btn>
    </div>
</template>

<style scoped>
.note {
    background-color: #002755;
    color: white;
    position: fixed;
    right: 50px;
    bottom: 50px;
    text-transform: capitalize;
}
</style>