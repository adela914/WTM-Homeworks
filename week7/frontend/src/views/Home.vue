<template lang="pug">
  div.container
    RestaurantCard
   
    
      
    
</template>


<style scoped>

.container {
  display: flex;
  flex-direction: row;
  
}
/* Image in first page */

.food {
    height: 350px;
    width: 350px;
}

</style>

<script>
import RestaurantCard from '@/components/RestaurantCard.vue'

export default {
  name: 'Home',
  components: {
    RestaurantCard
  }
}
</script>