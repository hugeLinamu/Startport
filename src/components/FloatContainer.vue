<template>
    <!-- 把数据传递给插槽的使用者 -->
    <div :style="style">
        <slot :theImageStyle="metaDate.props">
        </slot>
        <pre>
            <!-- {{ metaDate.props }} -->
        </pre>
    </div>
</template>

<script setup lang='ts'>
// import { useLocalStorage } from '@vueuse/core'
import { watch, ref, computed, StyleValue } from 'vue'
import { metaDate, proxyEl } from '../composables/floating'

const domRect = ref<DOMRect>()

watch(proxyEl, (el) => {
    domRect.value = el?.getBoundingClientRect()
}, { deep: true, immediate: true })

const style = computed((): StyleValue => {
    return {
        position: 'fixed',
        // 当 domRect.value?.left 值为 undeined 或 null 时 , left值为??后面的 0
        left: `${domRect.value?.left ?? 0}px`,
        top: `${domRect.value?.top ?? 0}px`
    }
})

</script>

<style scoped >
div {
    transition: all .5s linear;
}
</style>
