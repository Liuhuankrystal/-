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
import seeinterflow from '../view/seeinterflow'
import editorBoard from '../view/editorBoard'
import editHead from '../view/editHead'
import huifu from '../view/huifu'



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
      name: 'uploadPhoto',
      component: uploadPhoto
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/forgetPassWord',
      name: 'forgetPassWord',
      component: forgetPassWord
    },
      {
          path: '/debut',
          name: 'debut',
          component: debut
      },
      {
          path: '/userInfo',
          name: 'userInfo',
          component: userInfo
      },
      {
          path: '/interact',
          name: 'interact',
          component: interact
      },
      {
          path: '/dynamicLeave',
          name: 'dynamicLeave',
          component: dynamicLeave
      },
      {
          path: '/userList',
          name: 'userList',
          component: userList
      },
      {
          path: '/palyList',
          name: 'palyList',
          component: palyList
      },
      {
          path: '/linkers',
          name: 'linkers',
          component: linkers
      },
      {
          path: '/follows',
          name: 'follows',
          component: follows
      },
      {
          path: '/infoEditInfo',
          name: 'infoEditInfo',
          component: infoEditInfo
      },
      {
          path: '/personBasic',
          name: 'personBasic',
          component: personBasic
      },
      {
          path: '/personSafetyAndHealth',
          name: 'personSafetyAndHealth',
          component: personSafetyAndHealth
      },
      {
          path: '/personShowVisiters',
          name: 'personShowVisiters',
          component: personShowVisiters
      },
      {
          path: '/personkeywords',
          name: 'personkeywords',
          component: personkeywords
      },
      {
          path: '/recommend',
          name: 'recommend',
          component: recommend
      },
      {
          path: '/pointTime',
          name: 'pointTime',
          component: pointTime
      },
      {
          path: '/seeinterflow',
          name: '查看发言',
          component: seeinterflow
      },
      {
          path: '/editorBoard',
          name: 'editorBoard',
          component: editorBoard
      },
      {
          path: '/editHead',
          name: 'editHead',
          component: editHead
      },
      {
          path: '/huifu',
          name: 'huifu',
          component: huifu
      },

      

  ]
})
