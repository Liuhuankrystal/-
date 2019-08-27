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
import infoEditInfo from '../view/infoEditInfo'
import personBasic from '../view/personBasic'
import personSafetyAndHealth from '../view/personSafetyAndHealth'
import personShowVisiters from '../view/personShowVisiters'
import personkeywords from '../view/personkeywords'
import recommend from '../view/recommend'
import pointTime from '../view/pointTime'



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
      },
      {
          path: '/infoEditInfo',
          name: '编辑信息',
          component: infoEditInfo
      },
      {
          path: '/personBasic',
          name: '个人基本信息',
          component: personBasic
      },
      {
          path: '/personSafetyAndHealth',
          name: '安全与健康',
          component: personSafetyAndHealth
      },
      {
          path: '/personShowVisiters',
          name: '向访问者展示',
          component: personShowVisiters
      },
      {
          path: '/personkeywords',
          name: '关键词',
          component: personkeywords
      },
      {
          path: '/recommend',
          name: '关键词',
          component: recommend
      },
      {
          path: '/pointTime',
          name: '关注',
          component: pointTime
      }

      

  ]
})
