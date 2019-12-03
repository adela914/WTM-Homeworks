<template lang="pug">
  v-container(style="max-width:450px;")
    v-layout(row wrap)
      v-flex(xs12)
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
export default {
  name: 'ResEdit',
  
}
</script>