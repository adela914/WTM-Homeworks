<template lang="pug">
  v-col(cols="12" md="4")     
    v-card.mx-auto(max-width="280") 
      v-img(:src="restaurant.image ? restaurant.image : defaultImg")
      v-card-title {{ restaurant.name }}
      v-card-subtitle {{ restaurant.location }}
      v-card-actions
        v-btn(text @click="moveRestaurant") Explore
        v-btn(@click="likeRestaurant" color="purple" text) Like
        v-card-subtitle.likes {{ restaurant.likes }}
        v-spacer
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      v-expand-transition
        div(v-show="show")
          v-divider
          v-card-text {{ restaurant.description }}

</template>

<script>
const defaultImg = require('../../images/sashimi.png')
import { mapActions } from 'vuex'

  export default { 

    data: () => ({
      show: false,
      defaultImg:defaultImg

    }),
    name: 'ResCard',
    props: {
      restaurant: {
        type: Object
      }
    },
    methods: {
     ...mapActions(['likeRes']),
     likeRestaurant() {
       this.likeRes(this.restaurant._id)
     }, 
     moveRestaurant(){
       this.$router.push({ name:'restaurant', params: {id: this.restaurant._id} })
     }
    }
  }

</script>



