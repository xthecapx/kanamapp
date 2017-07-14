<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable
        collapse
        width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="menuIsOpen">
        <menu-page @updatePage="updatePageStack($event)"></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <component
          :is="currentPage"
          @toggleMenu="menuIsOpen = !menuIsOpen"></component>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import MenuPage from './components/MenuPage'
import Study from './pages/Study'
import AppReference from './pages/Reference'
import Dictionary from './pages/Dictionary'

export default {
  name: 'app',
  data () {
    return {
      menuIsOpen: false,
      currentPage: 'Study'
    }
  },
  methods: {
    updatePageStack(event) {
      this.currentPage = event
      this.menuIsOpen = false
    }
  },
  components: {
    MenuPage,
    Study,
    AppReference,
    Dictionary
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ons-splitter-side[side=left][animation=overlay] {
    border-right: 1px solid #BBB;
  }
</style>
