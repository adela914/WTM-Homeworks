<template lang="pug">
  main
    DeleteModal(:restaurant="restaurant")
    EditModal(:restaurant="restaurant")
    ResInfo(:restaurant="restaurant")
    Comments(:comments="restaurant.comments")
    FormComment(:restaurant="restaurant")
 
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
    dialog: false,
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

