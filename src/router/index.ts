import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//import Home from '../views/Home.vue'
import TonePlayer from '../views/Tone.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TonePlayer',
    component: TonePlayer
  },
    {
      path: '/tonejs',
      name: 'TonePlayer',
      component: () => import(/* webpackChunkName: "tonejs" */ '../views/Tone.vue')
    },
    {
      path: '/magentajs',
      name: 'Magenta',
      component: () => import(/* webpackChunkName: "magentajs" */ '../views/Magenta.vue')
    },
    {
      path: '/synth',
      name: 'Synth',
      // route level code-splitting
      // this generates a separate chunk (synth.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "synth" */ '../views/Synth.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
