<template lang="pug">
  main
    h2 Hello World
    button(@click="fetchRestaurant") hihi

   


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
   
  },
  methods: {
     ...mapActions(['fetchRestaurant'])
  }
  }
</script>