import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'Grid' }
      },
      {
        path: 'grid',
        name: 'Grid',
        component: () => import('@/views/CardsGridLayout.vue')
      },
      {
        path: 'row',
        name: 'Row',
        component: () => import('@/views/CardsRowLayout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
