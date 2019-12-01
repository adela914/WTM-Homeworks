<template lang="pug">
  content
    Search
    v-container.container
        v-row
          v-col(cols="12" md="4")
            ResCard

      
   
    
      
    
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
import ResCard from '@/components/ResCard.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    ResCard,
    Search
  }
}
</script>