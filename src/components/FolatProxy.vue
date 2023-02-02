<template>
    <!-- <div> FloatProxy </div> -->
</template>


<script setup lang='ts'>
import {useAttrs} from 'vue'
import { metaDate } from '../composables/floating'
const porps = defineProps<{
    style: object
}>()

metaDate.props = porps.style
metaDate.attrs = useAttrs()
</script>

<style scoped >

</style>