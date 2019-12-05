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
        v-btn Edit
        v-btn(@click="deleteRes") Delete
         
</template>

<script>
const defaultImg = require('../../images/sashimi.png')
import { mapActions } from 'vuex'

  export default { 
   
    name: 'ResInfo',
    data: () => ({
      defaultImg:defaultImg
    }),
    props: {
      restaurant: {
        type: Object
      }
    },
    methods: {
      ...mapActions(['delRes', 'likeRes', 'fetchARes', 'fetchRes']),
      deleteRes() {
        if(confirm('Do you really want to delete the restaurant? 😳')) {
          this.delRes(this.restaurant._id)
          this.$router.push('/')
        }
      },
       likeRestaurant() {   
        this.likeRes(this.restaurant._id)  
     }

    }
  }
</script>




