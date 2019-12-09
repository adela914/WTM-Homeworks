<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="dialog" persistent max-width="600px")
      template(v-slot:activator="{ on }")
        v-btn(color="rgb(253, 210, 74)" v-on="on") Edit
      v-card
        v-card-title
          span.headline Edit {{ restaurant.name }}'s Information!
        v-card-title
          v-card-text
            v-container
              v-row
                v-col(cols="12" sm="4" md="6" )
                  v-text-field(label="Restaurant's name" v-model="restaurant.name" color="rgb(253, 210, 74)")
                v-col(cols="12" sm="4" md="6")
                  v-text-field(label="Location" v-model="restaurant.location" color="rgb(253, 210, 74)")
                v-col(cols="12" sm="12" md="12")
                  v-textarea(label="Description" v-model="restaurant.description" color="rgb(253, 210, 74)")
            small *You cannot undo the changes once you click save button.
          v-card-actions
            v-spacer
            v-btn(color="blue darken-1" text @click="dialog = false") Cancel
            v-btn(color="blue darken-1" text @click="editRestaurant()") Save

              


</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
    }
  },
  props: {
      restaurant: {
        type: Object
      }
    },
   methods: {
      ...mapActions(['editRes']),
      editRestaurant() {
        const editedRes = {
        name: this.restaurant.name,
        author: this.restaurant.author,
        location: this.restaurant.location,
        image: this.restaurant.image,
        description: this.restaurant.description
        }
        this.editRes([this.restaurant._id, editedRes])
        this.dialog = false

      
      },
    }
}

  
</script>