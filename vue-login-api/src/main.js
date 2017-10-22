// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'
import MyPlugin from './myPlugin'
import App from './App'
import router from './router'

Vue.use(VueResource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080'
})
Vue.use(MyPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
