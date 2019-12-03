<template lang="pug">
  v-container(style="max-width:400px;")
    v-text-field(solo label="Search")
    //- v-btn(@click="search") Search

</template>

<script>
  export default { 
   
    name: 'Search',
    props: ['Home']
  }
</script>

