import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import AboutMyself from '../views/AboutMyself.vue'
import QuizView from '../views/QuizView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutMyself
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    
    {
      path: '/quiz',
      name: 'quizapp',
      component: QuizView
    },
    {
      path: '/vuetify',
      name: 'Programming Skills',
      component: () => import('../views/AboutVuetify.vue')
    },
    {
      path: '/aboutapp',
      name: 'Programming Skills',
      component: () => import('../views/AboutApp.vue')
    },

  ]
})

export default router
