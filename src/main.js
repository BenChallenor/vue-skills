import Vue from 'vue'
import App from './App.vue'

// to add vee validate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
