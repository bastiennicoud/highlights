import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import router from './router'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCw68hpwe2dRyhDnnEpFT1MMaNUSElLlfU',
  authDomain: 'highlights-api.firebaseapp.com',
  databaseURL: 'https://highlights-api.firebaseio.com',
  projectId: 'highlights-api',
  storageBucket: 'highlights-api.appspot.com',
  messagingSenderId: '152327037633'
}
firebase.initializeApp(config)

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
