<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

import { ref } from 'vue'

const store = useCounterStore()

const { name, count, doubleCount } = storeToRefs(store)

const { increment } = store

let surname = ref('Anatole')
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-xl">This is an about page</h1>
        <div class="">{{ name }} {{ surname }}: {{ count }}, {{ doubleCount }}</div>
        <button type="button" class="border rounded-lg p-3" @click="increment()">Increase</button>
    </div>
</template>
