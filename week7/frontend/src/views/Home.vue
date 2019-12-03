<template lang="pug">
  content
    Search
    v-container.container
        v-row
          ResCard(v-for="restaurant in restaurants", :restaurant="restaurant", :key="restaurant._id")

   
    
      
    
</template>


<style scoped>

.container {
  display: flex;
  flex-direction: row;
  
}

</style>

<script>
import ResCard from '@/components/ResCard.vue'
import Search from '@/components/Search.vue'
import { mapState, mapActions } from 'vuex'
 
export default {
  name: 'Home',
  components: {
    ResCard,
    Search
  },
  computed: {
    ...mapState(['restaurants'])
  },
  methods: {
    ...mapActions(['fetchRes'])
  },
  created() {
    this.fetchRes()
  }
}
</script>