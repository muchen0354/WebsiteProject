import Vue from 'vue'
import Router from 'vue-router'

// home
import Home from '@/components/home/home'
import Gateway from '@/components/home/home-gateway'
import Tag from '@/components/home/home-tag'
import Daoding from '@/components/home/home-daoding'
import Lock from '@/components/home/home-lock'

// introduce
import Introduce from '@/components/introduce/introduce'

// case
import Case from '@/components/case/case'

// about
import About from '@/components/about/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home/gateway',
      name: 'gateway',
      component: Gateway
    },
    {
      path: '/home/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/home/daoding',
      name: 'daoding',
      component: Daoding
    },
    {
      path: '/home/lock',
      name: 'lock',
      component: Lock
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
