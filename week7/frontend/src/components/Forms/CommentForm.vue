<template lang="pug">
  main
    v-col
      v-col
        v-text-field(v-model="author" label="Name"
                placeholder="What's your name?" color="rgb(253, 210, 74)")
      v-col   
        v-textarea(v-model="text" solo
              name="input-7-4" color="rgb(253, 210, 74)"
              label="What do you think?" )
        v-btn(@click="submitComment" color="rgb(253, 210, 74)") Comment
    


</template>

<script>
import { mapActions } from 'vuex'


  export default { 
    data() {
      return {
        author: null,
        text: null
      }
    },
    methods: {
      ...mapActions(['addComment']),
      submitComment() {
        const newComment= {
          author: this.author,
          text: this.text,
        }
       
        this.addComment([newComment, this.restaurant._id])
        this.clearForm()

      },
      clearForm() {
        this.author = null,
        this.text = null
      }
    },
    name: 'FormComment',
    props: ['restaurant']
    
  }
</script>
