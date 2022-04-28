import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Login.vue'
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
