import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '../view/login'
import uploadPhoto from '../view/uploadPhoto'
import forgetPassWord from '../view/forgetPassWord'
import dynamic from '../view/dynamic'



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
      name: '动态事务',
      component: dynamic
    },
    {
      path: '/forgetPassWord',
      name: '忘记密码',
      component: forgetPassWord
    }
  ]
})
