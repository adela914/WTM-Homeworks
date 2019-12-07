<template lang="pug">
    v-container(style="max-width:500px" align-center)
      v-layout
        v-row
          v-col
            v-alert(v-model="alert" v-if="alert" type="success") Thank you for subscribe us! ❤️
            v-text-field(v-model="fName" label="First Name" outlined color="yellow" :rules="nameRules" lazy-validation)
            v-text-field(v-model="lName" label="Last Name" outlined color="yellow" :rules="nameRules" lazy-validation)
            v-text-field(v-model="email" label="Email" outlined color="yellow" :rules="emailRules")
            v-btn(@click="Signup" color="rgb(253, 210, 74)") Submit
          
        


</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SubscribeForm',
  data() {
    
      return {
        alert:false,
        fName:null,
        lName:null,
        email:null,
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ]
      }
    },
    methods: {
      ...mapActions(['subscribe']),
      Signup() {
        const userInfo= {
          fName:this.fName,
          lName:this.lName,
          email:this.email
        }
        this.subscribe(userInfo)
        this.alert = true
        this.clearForm()
      },
      clearForm() {
        this.fName = null,
        this.lName = null,
        this.email = null
       
      }
    }
}
</script>