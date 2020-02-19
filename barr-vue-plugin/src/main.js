import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vueTable from './plugin/personinfo-table'

Vue.config.productionTip = false
Vue.use(vueTable);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
