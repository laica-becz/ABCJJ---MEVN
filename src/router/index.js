import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RestaurantPage from '../views/RestaurantPage.vue'
import FormPage from '../views/FormPage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/restaurants', name: 'restaurants', component: RestaurantPage },
    { path: '/form', name: 'form', component: FormPage },
    { path: '/about', name: 'about', component: AboutPage },
  ]
})

export default router