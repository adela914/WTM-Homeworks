<template lang="pug">
  v-card.mx-auto(height="auto" width="100%")
    v-list-item
      v-list-item-content
        v-list-item-title.headline {{ restaurant.name }}
        v-list-item-subtitle.subtitle-1 Posted by {{ restaurant.author }}
        v-list-item-subtitle.subtitle-1 @ {{ restaurant.location }}
          v-btn(@click="likeRestaurant" color="purple" text)
            v-icon mdi-heart
          v-list-item-subtitle(class="red--text text--lighten-1 font-weight-bold") {{ restaurant.likes }} Likes
        v-list-item-subtitle.text-right Last updated time : {{ restaurant.updatedAt }}
    v-img(:src="restaurant.image ? restaurant.image : defaultImg"  height="250")
    v-card-text Visit ten places on our planet that are undergoing the biggest changes today.
  
    

    
    



</template>

<script>
const defaultImg = require('../../images/food.png')

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




