<template lang="pug">
  div
    v-row(justify="center")
      v-btn(color="rgb(253, 210, 74)" @click.stop="dialog = true") Delete
      v-dialog(v-model="dialog" max-width="600px")
        v-card
          v-alert(v-model="alert" v-if="alert" type="warning") Hmmm...Sorry, that password isn't right.
          v-card-title.headline Please type password that you created. 
          v-text-field(v-model="password" type="password"  label="Please type here the password you used" color="rgb(253, 210, 74)" width="50px")
          v-card-actions
            v-spacer
            v-btn(color="green darken-1" text @click="cancelModal") Cancel
            v-btn(color="green darken-1" text @click="deleteRes") Delete
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      password: null,
      alert:false
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
          this.alert = true
          console.log("Password doesn't match.")
        }
      },
      cancelModal() {
        this.dialog = false
        this.alert = false
        this.password = null
      }
    }
}

  
</script>