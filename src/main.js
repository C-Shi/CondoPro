import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

String.prototype.toCapitalize = function () {
  if (this.length) {
    return this[0].toUpperCase() + this.slice(1);
  }
  return this;
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
