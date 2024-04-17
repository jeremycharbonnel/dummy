<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, count, doubleCount } = storeToRefs(store)
// the increment action can just be destructured
const { increment } = store
</script>

<template>
    <main class="container mx-auto">
        <!-- <TheWelcome /> -->
        <h1 class="text-xl">Home page</h1>
        <div class="">{{ name }}: {{ count }}, {{ doubleCount }}</div>
        <button type="button" class="border rounded-lg p-3" @click="increment()">Increase</button>
    </main>
</template>
