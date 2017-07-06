<template id="toolbar">
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="$emit('toggleMenu')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    props: ['title']
  }
</script>