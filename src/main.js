import Vue from 'vue'
import App from './App.vue'

// to add router & add to Vue object
import router from './router'

// to add vee validate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
