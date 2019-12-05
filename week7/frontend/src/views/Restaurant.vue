<template lang="pug">
  main
    ResInfo(:restaurant="restaurant")
    Comments(:comments="restaurant.comments")
    FormComment(:restaurant="restaurant")
 
</template>


<script>
import ResInfo from '@/components/Cards/ResInfoCard.vue'
import Comments from '@/components/Comments.vue'
import FormComment from '@/components/Forms/CommentForm.vue'
import { mapState, mapActions } from 'vuex'


export default {
  name: 'Restaurant',
  components: {
    ResInfo,
    Comments,
    FormComment
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


  //  div(v-if="dialog")
  //     v-row(justify="center")
  //       v-btn( color="primary" dark @click.stop="modal = true")
  //       v-dialog(v-model="dialog" max-width="600px")
  //         v-card
  //           v-card-title.headline Use Google's location service?
  //           v-card-actions
  //             v-spacer
  //             v-btn(color="green darken-1" text @click="dialog = false") Disagree
  //             v-btn(color="green darken-1" text @click="dialog = false") Agree
</script>

