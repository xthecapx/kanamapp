<template>
  <v-ons-page>
    <custom-toolbar
      title="Book One"
      @toggleMenu="$emit('toggleMenu')"></custom-toolbar>
    <div class="table-wrapper">
      <v-client-table
        :data="getDictionary"
        :columns="columns"
        :options="options"></v-client-table>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../components/commons/Toolbar'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        columns: ['img', 'en', 'answer'],
        words: [],
        options: {
          templates: {
              img: function(h, src) {
                  return h('img', {
                    attrs: {
                      src: src.img
                    },
                    class: {
                      "img-responsive": true
                    }
                  })
              }
          },
          headings: {
            en: "Question"
          },
          pagination: {
            chunk: 5
          }
        }
      }
    },
    components: {
      customToolbar: customToolbar
    },
    computed: mapGetters(['getDictionary'])
  }
</script>

<style>
  .VuePagination {
    text-align: center;
  }

  .VueTables__template .img-responsive {
    margin: 0 auto;
    max-width: 100px;
    width: 100%;
  }
</style>