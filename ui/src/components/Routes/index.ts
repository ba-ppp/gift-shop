import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home/Home.vue'
import About from '@/components/Cart/Cart.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})