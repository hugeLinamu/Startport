<template>
    <!-- 把数据传递给插槽的使用者 -->
    <div>
        <slot :theImageStyle="metaDate.props">
        </slot>
    </div>
</template>

<script setup lang='ts'>
import { metaDate } from '../composables/floating'

</script>

<style scoped >

</style>
