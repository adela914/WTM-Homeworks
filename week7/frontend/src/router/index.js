import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subscribe from '../views/Subscribe.vue'
import NewRes from '../views/NewRes.vue'
import HotRes from '../views/HotRes.vue'
import Restaurant from '../views/Restaurant.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/restaurant/:id',
        name: 'restaurant',
        component: Restaurant
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/subscribe',
        name: 'subscribe',
        component: Subscribe
    },
    {
        path: '/new',
        name: 'newRes',
        component: NewRes
    },
    {
        path: '/hot',
        name: 'hotRes',
        component: HotRes
    }

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router