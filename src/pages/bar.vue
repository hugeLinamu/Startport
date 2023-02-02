<template>
    <div>
        <div> bar </div>
        <div>
            <button @click="toFoo"> to:foo</button>
        </div>
        <FolatProxy :style="theClass"></FolatProxy>
    </div>
</template>

<script setup lang='ts'>
import FolatProxy from '../components/FolatProxy.vue';
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const theClass = reactive({
    width: '300px',
    height: '300px',
    ['border-radius']: '20px',
})

function toFoo() {
    router.push({
        name: 'Foo'
    })
}

</script>

<style scoped >

</style>