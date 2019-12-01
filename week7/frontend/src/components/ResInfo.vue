<template lang="pug">
  div
    v-card  
      v-responsive
         v-img(src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px")
         v-card-title Restaurant's name
         v-card-subtitle Location 
         v-card-text Description
</template>

<script>
  export default { 
   
    name: 'ResInfo',
    props: ['Home']
  }
</script>




