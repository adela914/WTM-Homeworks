<template lang="pug">
  p A restaurant's individual page.
    ResInfo(:restaurant="restaurant")
    Comments(:comments="restaurant.comments")
    FormComment(:restaurant="restaurant")
     
</template>


<script>
import ResInfo from '@/components/ResInfo.vue'
import Comments from '@/components/Comments.vue'
import FormComment from '@/components/FormComment.vue'
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Restaurant',
  components: {
    ResInfo,
    Comments,
    FormComment
  },
  computed: {
    ...mapState(['restaurant'])
  },
  methods: {
    ...mapActions(['fetchARes'])
  },
  created() {
    this.fetchARes(this.$route.params.id)
  }
}
</script>