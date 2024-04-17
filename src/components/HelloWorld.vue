<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

const formatted: Object = useDateFormat(useNow(), 'Do of MMMM YYYY HH:mm:ss')

defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-green-300 text-xl">{{ msg }}</h1>
        <h3>
            Here is a dummy application to make a list of events. <br />
            It's made with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
        </h3>
        <p>
            The current date is the <span>{{ formatted }}</span>
        </p>
    </div>
</template>

<style scoped>
span {
    @apply text-red-300;
}
</style>
