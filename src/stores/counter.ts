import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count: Ref<number> = ref(0)
    const name: Ref<string> = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { name, count, doubleCount, increment }
})
