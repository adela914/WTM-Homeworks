import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurants: [],
        restaurant: {},
        comments: [],
        hotRestaurants: []
    },
    mutations: {
        SET_RES(state, data) {
            state.restaurants = data
        },
        SET_ARES(state, data) {
            state.restaurant = data
        },
        // SET_ARESBYNAME(state, data) {
        //     state.restaurant = data
        // },
        SET_HOTRES(state, data) {
            state.hotRestaurants = data
        },
        addRes(state, data) {
            state.restaurants.unshift(data)
        },
        addComment(state, data) {
            state.comments.unshift(data)
        },
        likeRes(state, data) {
            const foundRes = state.restaurants.find(x => x._id === data._id)
            foundRes.likes = data.likes
        },
        delRes(state, data) {
            state.restaurants.filter(r => r._id !== data._id)
        }
    },
    actions: {
        async fetchRes({ commit }) {
            const restaurants = await axios.get("http://localhost:3000/restaurants")
            commit('SET_RES', restaurants.data)
        },
        async fetchARes({ commit }, id) {
            const restaurant = await axios.get(`http://localhost:3000/restaurants/${id}`)
            commit('SET_ARES', restaurant.data)
        },
        // async fetchAResByName({ commit }, name) {
        //     const restaurant = await axios.get(`http://localhost:3000/restaurants/search/${name}`)
        //     commit('SET_ARESBYNAME', restaurant.data)
        //     console.log(restaurant) 
        // },

        async fetchHotRes({ commit }) {
            const hotRes = await axios.get("http://localhost:3000/restaurants/hot/show")
            commit('SET_HOTRES', hotRes.data)
        },
        async addRes({ commit }, res) {
            const newRes = await axios.post("http://localhost:3000/restaurants/new", res)
            commit('addRes', newRes.data)
        },
        async addComment({ commit }, [comment, id]) {
            const newComment = await axios.post(`http://localhost:3000/restaurants/${id}`, comment)
            commit('addComment', newComment.data)
        },
        async likeRes({ commit }, id) {
            const likedRes = await axios.put(`http://localhost:3000/restaurants/like/${id}`)
            commit('likeRes', likedRes.data)
        },
        async delRes({ commit }, id) {
            const deletedRes = await axios.delete(`http://localhost:3000/restaurants/${id}`)
            commit('delRes', deletedRes.data)
        }

    },
    modules: {}
})