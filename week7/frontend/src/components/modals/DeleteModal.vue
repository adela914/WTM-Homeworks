<template lang="pug">
  div
    v-row(justify="center")
      v-btn(color="rgb(253, 210, 74)" dark @click.stop="dialog = true") Delete
      v-dialog(v-model="dialog" max-width="600px")
        v-card
          v-card-title.headline Please type password that you created. 
          v-text-field(v-model="password" type="password"  max-width="200px")
          v-card-actions
            v-spacer
            v-btn(color="green darken-1" text @click="dialog = false") Cancel
            v-btn(color="green darken-1" text @click="deleteRes") Delete
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      password: null
    }
  },
  props: {
      restaurant: {
        type: Object
      }
    },
   methods: {
      ...mapActions(['delRes']),
      deleteRes() {
        if(this.password === this.restaurant.password) {
          this.delRes(this.restaurant._id)
          this.dialog = false
          this.$router.push('/')
        } else {
          console.log("Password doesn't match.")
        }
      },
    }
}

  
</script>