<template lang="pug">
  v-container
    p(v-for="comment in comments") {{ comment.author }} {{ comment.text }}
</template>


<script>
export default {
  
    name: 'Comments',
    props: {
      comments: {
        type: Array
      }
    }
  
}
</script>


