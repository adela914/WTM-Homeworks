<template lang="pug">
  v-container(fluid)
    v-layout(row wrap)
      v-flex(md12)
        ResInfo(:restaurant="restaurant")
      v-flex.modals(md12 xs12 text-right)
        DeleteModal.modal(:restaurant="restaurant")
        EditModal.modal(:restaurant="restaurant")
      v-flex(md6 xs12)
        Comments(:comments="restaurant.comments")
      v-flex(md6 xs12)
        FormComment(:restaurant="restaurant" fluid)
</template>


<script>
import ResInfo from '@/components/Cards/ResInfoCard.vue'
import Comments from '@/components/Comments.vue'
import FormComment from '@/components/Forms/CommentForm.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'
import EditModal from '@/components/modals/EditModal.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    ResInfo,
    Comments,
    FormComment,
    DeleteModal,
    EditModal,
  },
  data(){
    return { 
    dialog: false
    }
  },
  computed: {
    ...mapState(['restaurant'])
  },
  methods: {
    ...mapActions(['fetchARes']),
  },
  created() {
    this.fetchARes(this.$route.params.id)
  }
}
</script>

<style scoped>
.modals {
  padding-left:12px;
}
.modal {
  display: inline-block;
  padding-right: 30px;
  margin-top: 10px;
  
}

</style>
