<template lang="pug">
  v-card.mx-auto(max-width="280")
    v-img(src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px")
    v-card-title
      Top western road trips
    v-card-subtitle 1,000 miles of wonder
    v-card-actions
      v-btn(text) Share
      v-btn(color="purple" text) Explore
      v-spacer
      v-btn(icon @click="show = !show")
        v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
    v-expand-transition
      div(v-show="show")
        v-divider
        v-card-text I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

</template>

<script>
  export default { 
    data: () => ({
      show: false,
    }),
    name: 'RestaurantCard',
    props: ['Home']
  }
</script>

