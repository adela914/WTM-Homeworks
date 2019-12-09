<template lang="pug">
  v-app
    v-container.app
      header
        section#title
            div.navbar
                a
                  router-link.logo(to="/") MOGO!
                .navitems
                    router-link(to="/new") Share
                    router-link(to="/hot") Hot🔥
                    router-link(to="/subscribe") Subscribe
                    router-link(to="/about") About
      main
        router-view              
      v-footer.footer(absolute class="font-weight-medium amber accent-2") 
        v-col(class="text-center"
        cols="12") Made with ❤️ in Berlin          

      

</template>

<script>
import { mapActions } from 'vuex'
 
export default {
  name: 'App',
  components: { 
  },
  computed: { 
  },
  methods: {
    ...mapActions(['fetchRes'])
  },
  created() {
    this.fetchRes()
  }
}
</script>

<style scoped>

/* Navigation bar style */
@import url('https://fonts.googleapis.com/css?family=Pacifico|Questrial&display=swap');
.app {
  font-family:'Questrial', sans-serif;
}
a {
    text-decoration: none;
    color: #3a1f5d;
}
a:visited {
    color: #3a1f5d;
}
a:hover {
    color: #cf455c;
    text-decoration: none;
    cursor: pointer;
}
.logo {
    font-size: 3em;
    color: rgb(253, 210, 74) !important;
    font-family: 'Pacifico', cursive;
}
.navitems {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-weight: 1000;
    width: 50%;
    font-size: 1.3em;
    
}
.navbar {
    display: flex;
    justify-content: space-between;
}
#title {
    padding-left: 10%;
    padding-right: 10%;
}
main {
    padding-left: 10%;
    padding-right: 10%;
    margin-top:40px;
    margin-bottom:50px;
}

.footer {
  text-align: center;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .navitems {
    font-size: 15px;
  }
}
</style>