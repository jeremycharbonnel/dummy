<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const currentRouteName = computed(() => {
    return route.name
})
</script>

<template>
    <header class="container mx-auto flex gap-8 p-24">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

        <div class="space-y-16">
            <HelloWorld msg="Welcome dummy!" />

            <p class="">The current page is {{ currentRouteName }}</p>

            <nav class="flex gap-8">
                <RouterLink to="/" :class="currentRouteName === 'home' ? 'underline' : ''"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/events"
                    :class="currentRouteName === 'event-list' || 'event-detail' ? 'underline' : ''"
                    >Events</RouterLink
                >
                <RouterLink to="/about" :class="currentRouteName === 'about' ? 'underline' : ''"
                    >About</RouterLink
                >
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
img {
    width: 125px;
    height: 125px;
}
</style>
