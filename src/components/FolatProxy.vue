<template>
    <div :style="porps.style" ref="el"></div>
</template>


<script setup lang='ts'>
import { StyleValue, onMounted, ref  ,watch} from 'vue'
import { metaDate , proxyEl } from '../composables/floating'

const porps = defineProps<{
    style: StyleValue
}>()
metaDate.props = porps.style


// 这里的 el 要跟上面 ref="el" 一致
const el = ref<HTMLElement | null>()

onMounted(() => {
    proxyEl.value = el.value
})

watch(()=>porps.style,()=>{
    metaDate.props = porps.style
    
})

</script>

<style scoped >
div {
    background-color: gray; 
}
</style>