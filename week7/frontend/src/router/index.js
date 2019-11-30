import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import NewRestaurant from '../views/NewRestaurant.vue'
import HotRestaurant from '../views/HotRestaurant.vue'

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
        name: 'newRestaurant',
        component: NewRestaurant
    },
    {
        path: '/hot',
        name: 'hotRestaurant',
        component: HotRestaurant
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router