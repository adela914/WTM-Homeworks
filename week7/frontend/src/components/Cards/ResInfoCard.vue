<template lang="pug">
  div
    v-card  
      v-responsive
        v-img(v-bind:src="restaurant.image" height="200px")
        v-card-title {{ restaurant.name }}
        v-card-subtitle {{ restaurant.location }}
        v-card-text {{ restaurant.description }}
        v-card-subtitle {{ restaurant.likes }}
        v-btn Like
        v-btn Edit
        v-btn(@click="deleteRes") Delete
         
</template>

<script>
import { mapActions } from 'vuex'

  export default { 
   
    name: 'ResInfo',
    props: {
      restaurant: {
        type: Object
      }
    },
    methods: {
      ...mapActions(['delRes']),
      deleteRes() {
        if(confirm('Do you really want to delete the restaurant? 😳')) {
          this.delRes(this.restaurant._id)
        }
      }

    }
  }
</script>




