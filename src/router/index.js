port { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form from '../views/Form.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router