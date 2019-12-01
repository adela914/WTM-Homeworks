<template lang="pug">
  p A restaurant's individual page.
    ResInfo
    Comments
    FormComment
     
</template>


<script>
import ResInfo from '@/components/ResInfo.vue'
import Comments from '@/components/Comments.vue'
import FormComment from '@/components/FormComment.vue'


export default {
  name: 'Restaurant',
  components: {
    ResInfo,
    Comments,
    FormComment
  }
}
</script>