import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Administration from "@/components/Administration"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Administration',
      name: 'Administration',
      component: Administration
    }
  ]
})
