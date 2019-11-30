import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { conditionalExpression } from 'babel-types'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurants: null
    },
    mutations: {},
    actions: {
        fetchRestaurant() {
            const restaurants = axios.get('http://localhost:3000/restaurants')
            console.log(restaurants)
        }

    },
    modules: {}
})