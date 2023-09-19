import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import WorkView from '../views/WorkView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
