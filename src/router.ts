import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CheckBox from '@/views/CheckBox.vue'
import Flex from '@/views/Flex.vue'
import Slot from '@/views/Slot.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckBox
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    }
  ]
})
