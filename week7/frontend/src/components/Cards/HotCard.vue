<template lang="pug">
  v-col(cols="12" md="6" lg="4" xs="12")
    v-card.mx-auto.card(max-width="280") 
      v-img(:src="hotRestaurant.image ? hotRestaurant.image : defaultImg"  aspect-ratio max-height="200px")
      v-card-title {{ hotRestaurant.name }}
      v-card-text.text--primary
        div @{{ hotRestaurant.location }}
        div Posted by {{ hotRestaurant.author }}
      v-card-actions
        v-btn(text router :to="{ name:'restaurant', params: {id: hotRestaurant._id} }") Explore
        v-card-subtitle.red--text.text--lighten-1.font-weight-bold {{ hotRestaurant.likes }} LIKES
        v-spacer
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      v-expand-transition
        div(v-show="show")
          v-divider
          v-card-text {{ hotRestaurant.description }}

</template>

<script>
const defaultImg = require('../../images/food.png')
  export default { 

    data: () => ({
      show: false,
      defaultImg:defaultImg
    }),
    name: 'HotCard',
    props: {
      hotRestaurant: {
        type: Object
      }
    }
}

</script>


