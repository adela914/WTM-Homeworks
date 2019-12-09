<template lang="pug">
  v-container
    p.headline.font-italic.font-weight-medium Comments
    div
      v-alert.pa-0.pl-2(v-for="comment in comments" :key="comment._id" outlined
      color="#cf455c")
        .title {{ comment.author }} 
        div {{ comment.text }} 
        div.overline At {{ comment.createdAt}}
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


