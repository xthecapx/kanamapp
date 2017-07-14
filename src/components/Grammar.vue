<template id="grammar">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-12">
      <v-ons-button modifier="quiet" style="margin: 6px 0" @click="goTopics">Go Topics</v-ons-button>
      <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          mode="out-in">
          <component
            :is="mode"></component>
        </transition>
    </div>
  </div>
</template>

<script>
  import b1u1 from '../components/books/one/unitOne/Main'
  import b1u2 from '../components/books/one/unitTwo/Main'
  import b1u3 from '../components/books/one/unitThree/Main'
  import b1u4 from '../components/books/one/unitFour/Main'
  import b1u5 from '../components/books/one/unitFive/Main'
  import b1u6 from '../components/books/one/unitSix/Main'
  import b1u7 from '../components/books/one/unitSeven/Main'
  import b1u8 from '../components/books/two/unitEight/Main'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        mode: ""
      }
    },
    computed: mapGetters(['getType']),
    methods: {
      goTopics() {
        this.$emit('mode', 'topics')
      }
    },
    components: {
      b1u1,
      b1u2,
      b1u3,
      b1u4,
      b1u5,
      b1u6,
      b1u7,
      b1u8
    },
    created() {
        this.mode = this.getType
    }
  }
</script>

<style>
  .particle, .end, .s1, .s2, .verb, .optional, .pronoun {
    padding: 3px;
  }

  .particle {
    background: #FF9E80;
  }

  .end {
    background: #FFD180;
  }

  .s1, .s2 {
    background: #A7FFEB;
  }

  .verb {
    background: #FFFF8D;
  }

  .optional {
    background: #E0E0E0;
  }

  .pronoun {
    background: #E3F2FD;
  }

  /*.list-item--chevron:before {
    width: 20px;
  }*/
</style>