import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NewUser from '../views/NewUser.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'new.user',
    component: NewUser
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
