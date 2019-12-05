<template lang="pug">
  div.text-center
    v-dialog(v-model="dialog" width="500")
      template(v-slot:activator="{ on }")
        v-btn.success(dark v-on="on") Add New Project
      v-card
        v-card-title(class="headline grey lighten-2" primary-title) Add a New Project

</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>