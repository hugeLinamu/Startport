<template>
    <div>
        <div> foo </div>
        <button @click="add">enlarge</button>
        <div>
            <button @click="toBar"> to:bar</button>
        </div>
        <div style="margin: 100px">
            <!-- <FolatProxy :style="theClass"></FolatProxy> -->
            <theImageProxy :style="theClass"></theImageProxy>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { theImageProxy } from '../composables/images'
// import FolatProxy from '../components/FolatProxy.vue';
import { reactive, ref ,computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const size = ref(500)

const width = computed(()=>{
    return `${size.value}px`
})

const height = computed(()=>{
    return `${size.value}px`
})

const theClass = reactive({
    width,
    height,
    ['border-radius']: '50%',
})
function toBar() {
    router.push({
        name: 'Bar'
    })
}
function add() {
    size.value += 20
}



</script>

<style scoped >

</style>