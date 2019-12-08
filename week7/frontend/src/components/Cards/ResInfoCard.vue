<template lang="pug">
  v-card.mx-auto(height="auto" width="100%")
    v-list-item
      v-list-item-content
        v-list-item-title.headline Our Changing Planet
        v-list-item-subtitle by Kurt Wagner
        v-list-item-subtitle
          v-btn(icon)
            v-icon mdi-heart
    v-img(src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194")
    v-card-text Visit ten places on our planet that are undergoing the biggest changes today.
  
    

    
    



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




