import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '../view/login'
import uploadPhoto from '../view/uploadPhoto'
import forgetPassWord from '../view/forgetPassWord'
import dynamic from '../view/dynamic'
import debut from '../view/debut'
import userInfo from '../view/userInfo'
import interact from '../view/interact'
import dynamicLeave from '../view/dynamicLeave'
import userList from '../view/userList'
import palyList from '../view/palyList'
import linkers from '../view/linkers'
import follows from '../view/follows'



Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    },
    {
      path: '/uploadPhoto',
      name: '上传头像',
      component: uploadPhoto
    },
    {
      path: '/dynamic',
      name: '动态事务',
      component: dynamic
    },
    {
      path: '/forgetPassWord',
      name: '忘记密码',
      component: forgetPassWord
    },
      {
          path: '/debut',
          name: 'Debut',
          component: debut
      },
      {
          path: '/userInfo',
          name: '用户信息',
          component: userInfo
      },
      {
          path: '/interact',
          name: '互动消息',
          component: interact
      },
      {
          path: '/dynamicLeave',
          name: '留言消息',
          component: dynamicLeave
      },
      {
          path: '/userList',
          name: '搜索信息',
          component: userList
      },
      {
          path: '/palyList',
          name: '播放记录',
          component: palyList
      },
      {
          path: '/linkers',
          name: 'Linkers',
          component: linkers
      },
      {
          path: '/follows',
          name: 'Follows',
          component: follows
      }

  ]
})
