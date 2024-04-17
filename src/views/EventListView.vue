<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

const events = ref(null)

onMounted(() => {
    EventService.getEvents()
        .then((response) => {
            events.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-xl">Movies For Good</h1>
        <div class="flex flex-col justify-center">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
    </main>
</template>
