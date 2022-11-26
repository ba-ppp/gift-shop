import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Library from '@/components/Library/Library.vue'
import Payment from '@/components/Payment/Payment.vue'
import History from '@/components/History/History.vue'
import searchHistory from '@/components/History/SearchHistory.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/library',
        component: Library
    },
    {
        path: '/payment',
        component: Payment
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/history/:phone',
        component: searchHistory
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})