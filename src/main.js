// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App'
import store from './store'
import {ServerTable, ClientTable, Event} from 'vue-tables-2'

Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.use(ClientTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
