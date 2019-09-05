// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import VueCropper from 'vue-cropper' 
Vue.use(VueCropper)

import router from './router'
import Vue from 'vue'
import App from './App.vue'



//引入公共js
import common from '../commonFunction/common'
Vue.prototype.common = common;

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
});
