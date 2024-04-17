import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

import { useDateFormat, useNow } from '@vueuse/core'

const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })

const formatted = useDateFormat(useNow(), 'Do of MMMM YYYY HH:mm:ss')

describe('HelloWorld', () => {
    it('renders the message properly', () => {
        // const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })

    it('renders the current date properly', () => {
        // const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain(formatted.value)
    })
})
