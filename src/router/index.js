import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RegistroUser',
    name: 'RegistroUser',
    // route level code-splitting
    // this generates a separate chunk (RegistroUser.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RegistroUser" */ '../views/RegistroUser.vue')
  },
  {
    path: '/Alumno',
    name: 'Alumno',
    // route level code-splitting
    // this generates a separate chunk (Alumno.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Alumno" */ '../views/Alumno.vue')
  },
  {
    path: '/LogIn',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (LogIn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LogIn" */ '../views/LogIn.vue')
  },
  {
    path: '/Pagos',
    name: 'Pagos',
    // route level code-splitting
    // this generates a separate chunk (pagos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pagos" */ '../views/Pagos.vue')
  },
  {
    path: '/Asistencia',
    name:'Asistencia',
    // route level code-splitting
    // this generates a separate chunk (Asistencia.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:()=> import(/* webpackChunkName: "Asistencia" */'../views/Asistencia.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
