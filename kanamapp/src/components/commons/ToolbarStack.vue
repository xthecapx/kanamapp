<template id="custom-toolbar">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-back-button>{{ backLabel }}</v-ons-back-button>
    </div>
    <div class="center"><slot></slot></div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: ['backLabel']
  }
</script>