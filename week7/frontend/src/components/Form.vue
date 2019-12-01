<template lang="pug">
  v-container(style="max-width:450px;")
    v-layout(row wrap)
      v-flex(xs12)
        v-text-field(label="You Name" single-line color="rgb(253, 210, 74)")
        v-text-field(label="Name of Restaurant" single-line color="rgb(253, 210, 74)")
        v-text-field(label="Location" single-line color="rgb(253, 210, 74)")
        v-text-field(label="Image URL" single-line color="rgb(253, 210, 74)")
        v-textarea(color="rgb(253, 210, 74)")
          template(v-slot:label)
            div Description
        v-text-field(label="Password" type="password" single-line color="rgb(253, 210, 74)" style="max-width:200px;")
        v-btn(color="rgb(253, 210, 74)") Submit

</template>



<script>
  export default { 
   
    name: 'Form',
    props: ['Home']
  }
</script>
