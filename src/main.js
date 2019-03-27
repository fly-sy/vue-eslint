// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import './config/rem.js'

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Card,
  Tab,
  Tabs,
  Lazyload,
  Stepper,
  Panel,
  Switch,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Popup
} from 'vant'

import axios from 'axios'

import 'animate.css/animate.css'

import moment from 'moment'
Vue
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Stepper)
  .use(Panel)
  .use(Switch)
  .use(SubmitBar)
  .use(Checkbox).use(CheckboxGroup)
  .use(Popup)

// axios 没有类似于 vue-resource 的use 方式 需要自己在prototype 上添加 方法
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:5000/'
// 定义全局时间过滤器

Vue.filter('datefmt', (data, arg = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(data).format(arg)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
