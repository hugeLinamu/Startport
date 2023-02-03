<template>
    <div>
        <div> bar </div>
        <div>
            <button @click="toFoo"> to:foo</button>
        </div>
        <!-- <FolatProxy :style="theClass"></FolatProxy> -->
        <theImageProxy :style="theClass"></theImageProxy>
    </div>
</template>

<script setup lang='ts'>
import { theImageProxy } from '../composables/images'

// import FolatProxy from '../components/FolatProxy.vue'

import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const theClass = reactive({
    width: '300px',
    height: '300px',
    ['border-radius']: '30px',
})

function toFoo() {
    router.push({
        name: 'Foo'
    })
}

</script>

<style scoped >

</style>