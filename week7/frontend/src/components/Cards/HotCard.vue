<template lang="pug">
  v-col(cols="12" md="6" lg="4" xs="12")
    v-card.mx-auto(max-width="400")
      v-img.white--text.align-end(:src="hotRestaurant.image ? hotRestaurant.image : defaultImg" height="200px")
      v-card-title {{ hotRestaurant.name }}
      v-card-subtitle.pb-0 @{{ hotRestaurant.location }}
      v-card-text.text--primary 
        div {{ hotRestaurant.author }}
        div {{ hotRestaurant.discription }}
      v-card-actions
        v-btn(text router :to="{ name:'restaurant', params: {id: hotRestaurant._id} }") Explore
        v-card-subtitle.red--text.text--lighten-1.font-weight-bold {{ hotRestaurant.likes }} LIKES




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


