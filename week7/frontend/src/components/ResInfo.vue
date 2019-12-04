<template lang="pug">
  div
    v-card  
      v-responsive
         v-img(v-bind:src="restaurant.image" height="200px")
         v-card-title {{ restaurant.name }}
         v-card-subtitle {{ restaurant.location }}
         v-card-text {{ restaurant.description }}
         v-btn Edit
         v-btn Delete
         
</template>

<script>
  export default { 
   
    name: 'ResInfo',
    props: {
      restaurant: {
        type: Object
      }
    }
  }
</script>




