import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import NewRes from '../views/NewRes.vue'
import HotRes from '../views/HotRes.vue'
import Restaurant from '../views/Restaurant.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
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
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: Restaurant
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router




// {
//     path: '/:id',
//     name: 'restaurant',
//     component: Restaurant
// }