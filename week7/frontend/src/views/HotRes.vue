<template lang="pug">
  content
    p1.headline.font-italic.font-weight-medium.pl-3 Top 3 Restaurants
    v-container.container
        v-row
          HotCard(v-for="hotRestaurant in hotRestaurants", :hotRestaurant="hotRestaurant", :key="hotRestaurant._id")

   
    
      
    
</template>


<style scoped>

.container {
  display: flex;
  flex-direction: row;
  
}

</style>

<script>
import HotCard from '@/components/Cards/HotCard.vue'
import { mapState, mapActions } from 'vuex'
 
export default {
  name: 'HotRes',
  components: {
    HotCard
  },
  computed: {
    ...mapState(['hotRestaurants'])
  },
  methods: {
    ...mapActions(['fetchHotRes'])
  },
  created() {
    this.fetchHotRes()
  }
}
</script>