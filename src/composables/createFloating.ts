import { reactive, ref, watch, computed, StyleValue, Component, defineComponent, h, onMounted } from 'vue'

export function createFloating(component: Component) {
    const metaDate = reactive({
        props: {}
    })
    // 元素位置
    const proxyEl = ref<HTMLElement | null>()

    const Container = defineComponent({
        setup(props, ctx) {
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
            return () => h('div', { style: style.value }, h(component, {theImageStyle:metaDate.props}))
        }
    })

    const Proxy = defineComponent({
        props:['style'],
        setup(props, ctx) {
            
            metaDate.props = props.style

            // 这里的 el 要跟上面 ref="el" 一致
            const el = ref<HTMLElement | null>()

            onMounted(() => {
                proxyEl.value = el.value
            })

            watch(() => props.style, () => {
                metaDate.props = props.style

            })
            return () => h('div', { style:props.style, ref: el },
                [ctx.slots.defalut ? h(ctx.slots.defalut) : null,
                h('div',12321312)])
        }
    })
    return { Container, Proxy }
}