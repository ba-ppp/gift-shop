import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Library from '@/components/Library/Library.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/library',
        component: Library
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})