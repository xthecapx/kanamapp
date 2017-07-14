<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
    <div class="header">
      <img src="../assets/japanflag.png">
    </div>

    <v-ons-list-title>Kanamapp Navegation</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item
        modifier="chevron"
        v-for="item in essentialLinks"
        @click="goTo(item.id)" :key="item.id">
        <div class="left"><v-ons-icon fixed-width :icon="item.icon"></v-ons-icon></div>
        <div class="center">{{ item.label }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      essentialLinks: [
        {
          label: 'Study',
          icon: 'fa-book',
          id: 'Study'
        },
        {
          label: 'Answers',
          icon: 'fa-commenting',
          id: 'AppReference'
        },
        {
          label: 'Dictionary',
          icon: 'ion-chatboxes',
          id: 'Dictionary'
        }
      ]
    }
  },
  methods: {
    goTo (id) {
      this.$emit("updatePage", id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    max-width: 150px;
  }

  ons-list-item {
    cursor: pointer;
  }
</style>
