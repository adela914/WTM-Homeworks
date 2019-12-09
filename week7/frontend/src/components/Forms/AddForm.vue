<template lang="pug">
  v-container(style="max-width:450px;")
    v-layout(row wrap)
      v-flex(xs12)
        p1.font-weight-medium.headline.font-italic.text-center Share your favourite restaurant!
        v-text-field(v-model="author" label="You Name" single-line color="rgb(253, 210, 74)")
        v-text-field(v-model="name" label="Name of Restaurant" single-line color="rgb(253, 210, 74)")
        v-text-field(v-model="location" label="Location" single-line color="rgb(253, 210, 74)")
        v-text-field(v-model="image" label="Image URL" single-line color="rgb(253, 210, 74)")
        v-textarea(v-model="description" color="rgb(253, 210, 74)")
          template(v-slot:label)
            div Description
        v-text-field(v-model="password" label="Password" type="password" single-line color="rgb(253, 210, 74)" style="max-width:200px;")
        v-btn(@click="submit" color="rgb(253, 210, 74)") Submit

</template>



<script>
import { mapActions } from 'vuex'


  export default { 
    data() {
      return {
        author: null,
        name: null,
        location: null,
        image: null,
        description: null,
        password: null,
       
      }
    },
    methods: {
      ...mapActions(['addRes']),
      submit() {

        const nesRes= {
          author: this.author,
          name: this.name,
          location: this.location,
          image: this.image,
          description: this.description,
          password: this.password
        }
        this.addRes(nesRes)
        this.clearForm()
        this.$router.push('/')
      },
      clearForm() {
        this.author = null,
        this.name = null,
        this.location = null,
        this.image = null,
        this.description = null
        this.password =null
      }
    },
    name: 'Form',
    props: ['Home'],
    
  }
</script>
