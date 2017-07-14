<template id="Books">
  <v-ons-page>
    <custom-toolbar
      title="Book selection"
      @toggleMenu="$emit('toggleMenu')"></custom-toolbar>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in">
      <div class="reference-container" v-show="mode == 'topics'">
        <div class="form-group">
          <label for="units">Select Book:</label>
          <select
            class="form-control"
            v-model="book"
            @change="changeBook">
            <option
              v-for="(value, key) in getTopics"
              :value="key">{{ value.name }}</option>
          </select>
        </div>
      </div>
    </transition>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-12">
        <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          mode="out-in">
          <component
            :is="mode"
            @mode="updatePageStack"></component>
        </transition>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../components/commons/Toolbar'
  import Vocabulary from '../components/Vocabulary';
  import Topics from '../components/Topics';
  import Grammar from '../components/Grammar';
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        mode: 'topics',
        book: 0,
        changeActive: false
      }
    },
    computed: {
      ...mapGetters(['getTopics', 'getBook'])
    },
    components: {
      customToolbar: customToolbar,
      "topics": Topics,
      "vocabulary": Vocabulary,
      "grammar": Grammar
    },
    methods: {
      updatePageStack(page) {
        this.mode = page
      },
      changeBook() {
        this.$store.commit("setBook", this.book)
        this.$store.commit("setActive", 'active0')
      }
    }
  }
</script>