<template lang="pug">
  v-card.mx-auto(height="auto" width="100%")
    v-list-item
      v-list-item-content
        v-list-item-title.headline {{ restaurant.name }}
        v-list-item-subtitle by {{ restaurant.author }}
        v-list-item-subtitle
          v-btn(@click="likeRestaurant" color="purple" icon)
            v-icon mdi-heart
            v-list-item-subtitle  {{ restaurant.likes }} 
    v-img(:src="restaurant.image ? restaurant.image : defaultImg" height="194")
    v-card-text {{ restaurant.discription }}
  
    

    
    



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




