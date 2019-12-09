<template lang="pug">
  v-col(cols="12" md="6" lg="4" xs="12")
    v-card.mx-auto.card(max-width="280") 
      v-img(:src="restaurant.image ? restaurant.image : defaultImg"  aspect-ratio max-height="200px")
      v-card-title {{ restaurant.name }}
      v-card-subtitle @{{ restaurant.location }}
      v-card-actions
        v-btn(text @click="moveRestaurant") Explore
        v-btn(@click="likeRestaurant" color="purple" text)
          v-icon(color="purple") mdi-heart
        v-card-subtitle.red--text.text--lighten-1.font-weight-bold {{ restaurant.likes }} LIKES
        v-spacer
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      v-expand-transition
        div(v-show="show")
          v-divider
          v-card-text {{ restaurant.description }}

</template>

<script>
const defaultImg = require('../../images/food.png')
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

<style scoped>

.card {
  margin-bottom: 10px;
}


</style>
