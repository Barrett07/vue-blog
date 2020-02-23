import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let routes = [];
routes.push({
  path: '/personTable',
  component: ()=>import('@/test/person-table')
})
routes.push({
  path: '/vueFlopCount',
  component: ()=>import('@/test/test-flop-count')
})

export default new Router({
  mode: 'history',
  routes,
})