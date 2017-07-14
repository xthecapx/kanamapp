<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <div class="header">
      <img src="../assets/never.png">
    </div>

    <v-ons-list-title>About Me: </v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item v-for="item in essentialLinks" @click="goTo(item.link)" :key="item.link">
        <div class="left"><v-ons-icon fixed-width :icon="item.icon"></v-ons-icon></div>
        <div class="center">{{ item.label }}</div>
        <div class="right"><v-ons-icon icon="fa-external-link"></v-ons-icon></div>
      </v-ons-list-item>
    </v-ons-list>
    <!--
    <v-ons-list-title>About Me: </v-ons-list-title>
    <v-ons-row>
      <v-ons-col>
        <v-ons-card @click="goTo('http://router.vuejs.org/')">vue-router</v-ons-card>
      </v-ons-col>
      <v-ons-col>
        <v-ons-card @click="goTo('http://vuex.vuejs.org/')">vuex</v-ons-card>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-card @click="goTo('http://vue-loader.vuejs.org/')">vue-loader</v-ons-card>
      </v-ons-col>
      <v-ons-col>
        <v-ons-card @click="goTo('https://github.com/vuejs/awesome-vue')">awesome-vue</v-ons-card>
      </v-ons-col>
    </v-ons-row>
    -->
  </v-ons-page>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to kanamapp',
      essentialLinks: [
        {
          label: 'Linkedin',
          link: 'https://www.linkedin.com/in/cristian-marquez/',
          icon: 'fa-linkedin'
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/thecapnews',
          icon: 'fa-twitter'
        }
      ]
    }
  },
  methods: {
    goTo (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
  }

  .header img {
    max-width: 200px;
    margin: 10px auto;
  }

  ons-list-title:not(:first-of-type) {
    margin-top: 30px;
  }

  ons-card {
    text-align: center;
  }

  ons-list-item, ons-card {
    cursor: pointer;
  }
</style>
