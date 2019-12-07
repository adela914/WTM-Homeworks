<template lang="pug">
  v-container
    p Comments
    p(v-for="comment in comments") {{ comment.author }} : {{ comment.text }}  {{ comment.createdAt }}
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


