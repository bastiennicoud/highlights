import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import router from './router'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase'
import fireConfig from './fireConfig'

firebase.initializeApp(fireConfig)

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
