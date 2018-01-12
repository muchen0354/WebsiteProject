import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/scss/index.scss'
// 引入vuex
import store from '@/store/store'

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
