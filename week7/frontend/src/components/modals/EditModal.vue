<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="dialog" persistent max-width="600px")
      template(v-slot:activator="{ on }")
        v-btn(color="primary" dark v-on="on") Edit
      v-card
        v-card-title
          span.headline Edit {{ restaurant.name }}'s Information!
        v-card-title
          v-card-text
            v-container
              v-row
                v-col(cols="12" sm="6" md="4" )
                  v-text-field(label="Legal first name*" v-model="restaurant.author")
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal first name*" v-model="restaurant.location")
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required)
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal first name*" )
                v-col(cols="12" sm="6" md="4")
                  v-text-field(label="Legal first name*" )
                v-col(cols="12" sm="6" )
                  v-text-field(label="Legal first name*")
                v-col(cols="12" sm="6" )
                  v-text-field(label="Legal first name*")
            small *indicates required field
          v-card-actions
            v-spacer
            v-btn(color="blue darken-1" text @click="dialog = false") Close
            v-btn(color="blue darken-1" text @click="editRestaurant()") Close

              


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