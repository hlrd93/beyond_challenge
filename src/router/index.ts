import { createRouter, createWebHistory } from 'vue-router'
import PlanetsPage from '../views/PlanetsPage.vue'
import PlanetPage from '../views/PlanetPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'planets',
      component: PlanetsPage
    },
    { path: '/planet/:url', name: 'planet', component: PlanetPage }
  ]
})

export default router
