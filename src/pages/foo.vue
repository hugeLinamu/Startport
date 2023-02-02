<template>
    <div>
        <div> foo </div>
        <div>
            <button @click="toBar"> to:bar</button>
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
    width: '500px',
    height: '500px',
    ['border-radius']: '50%',
    margin: '100px'
})
function toBar() {
    router.push({
        name: 'Bar'
    })
}

</script>

<style scoped >

</style>