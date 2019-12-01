import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { conditionalExpression } from 'babel-types'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurants: [],
        comments: []
    },
    mutations: {
        SET_RES(state, data) {
            state.restaurants = data
            console.log(data)
        }
    },
    actions: {
        async fetchRes({ commit }) {
            const restaurants = await axios.get('http://localhost:3000/restaurants')
            commit('SET_RES', restaurants.data)
        }


    },
    modules: {}
})