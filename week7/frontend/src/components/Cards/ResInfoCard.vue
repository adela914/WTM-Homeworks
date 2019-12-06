<template lang="pug">
  div
    v-card  
     v-responsive  
        v-img(:src="restaurant.image ? restaurant.image : defaultImg" height="200px")
        v-card-title {{ restaurant.name }}
        v-card-subtitle {{ restaurant.location }}
        v-card-text {{ restaurant.description }}
        v-card-subtitle {{ restaurant.likes }}
        v-btn(@click="likeRestaurant") Like 
        
</template>

<script>
const defaultImg = require('../../images/sashimi.png')

import { mapActions } from 'vuex'

  export default { 
   
    name: 'ResInfo',
    data: () => ({
      defaultImg:defaultImg,

    }),
    props: {
      restaurant: {
        type: Object
      }
    },
    methods: {
      ...mapActions(['likeRes', 'fetchARes', 'fetchRes']),
       likeRestaurant() {   
        this.likeRes(this.restaurant._id)  
     },
    }
  }
</script>




