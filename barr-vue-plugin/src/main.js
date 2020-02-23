import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vueTable from './plugin/personinfo-table'
import vueFlop from './plugin/flopCount'

Vue.config.productionTip = false
Vue.use(vueTable);
Vue.use(vueFlop);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
