import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name:'Bar',
        component: () => import('../pages/bar.vue')
    },
    {
        path: '/foo',
        name:'Foo',
        component: () => import('../pages/foo.vue')
    },
    {
        path: '/hello',
        name:'Hello',
        component: () => import('../pages/hello.vue')
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})