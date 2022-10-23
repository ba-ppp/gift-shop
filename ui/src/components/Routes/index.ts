import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Library from '@/components/Library/Library.vue'
import Payment from '@/components/Payment/Payment.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/library',
        component: Library
    },
    
    // {
    //     path: '/library/:cat',
    //     name: 'contact.edit',
    //     props: (routes: { params: { cat: string } }) => ({ cat: parseInt(routes.params.cat) })
    // },
    {
        path: '/payment',
        component: Payment
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})