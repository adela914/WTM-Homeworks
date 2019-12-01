<template lang="pug">
  v-container.app
    header
      section#title
          div.navbar
              a
                router-link.logo(to="/") MOGO!
              .navitems
                  router-link(to="/new") Share
                  router-link(to="/hot") Hot🔥
                  router-link(to="/contact") Contact
                  router-link(to="/about") About
    main
      router-view              


    footer
      p Made with ❤️ in Berlin


</template>

<script>

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
    background-color: white;
    padding-left: 10%;
    padding-right: 10%;
}
main {
    padding-left: 10%;
    padding-right: 10%;
}

/* footer */

footer {
  position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 50px;
   background-color: rgb(253, 210, 74);
   color: white;
   text-align: center;
}


</style>
