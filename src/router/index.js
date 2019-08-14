import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footer from '@/components/footer'
import login from '../view/login'
import uploadPhoto from '../view/uploadPhoto'
import forgetPassWord from '../view/forgetPassWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/uploadPhoto',
      name: '上传头像',
      component: uploadPhoto
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/footer',
      name: '底部',
      component: footer
    }
  ]
})
