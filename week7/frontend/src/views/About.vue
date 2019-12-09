<template lang="pug">
  v-container(fluid)
    v-layout(row wrap)
      v-flex(md6 sm12)
        v-img(:src="defaultImg" max-width="400px")
      v-flex(md6 sm12)
        p.font-weight-medium.about In Berlin there are a plenty of Korean restaurants! But how do you know if it's an authentic Korean restaurant? No worries 🙅 Here you can find a lot of Korean restaurants with its informations and other foodie's reviews! Please do check our list out and have a good Korean Mogo! 🍱

</template>



<script>
const defaultImg = require('../images/sashimi.png')

export default {
  data: () => ({
      
      defaultImg:defaultImg

    })
}
</script>

<style scoped>
.about {
  font-size: 20px;
}
</style>