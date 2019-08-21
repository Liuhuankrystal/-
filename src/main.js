// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import router from './router'
import Vue from 'vue'
import App from './App.vue'


// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);


Vue.config.productionTip = false
Vue.use(router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
