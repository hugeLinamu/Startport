import { reactive, ref } from 'vue'
export const metaDate = reactive({
    props: {}
})
// 元素位置
export const proxyEl = ref<HTMLElement | null>()