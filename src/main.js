import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueMaterial from 'vue-material'
import axios from './assets/js/http'

Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  axios
})
