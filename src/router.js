import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/login/login')
const Register = () => import('@/register/register')
const Pc = () => import('@/pc/pc')
const Order = () => import('@/pc/order/order')
const Hotel = () => import('@/pc/hotel/hotel')
const Info = () => import('@/pc/hotel/info/info')
const Staff = () => import('@/pc/hotel/staff/staff')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/pc',
      name: 'pc',
      component: Pc,
      children: [
        {
          path: '/pc/order',
          name: 'order',
          component: Order
        },
        {
          path: '/pc/hotel',
          name: 'hotel',
          component: Hotel,
          children: [
            {
              path: '/pc/hotel/info',
              name: 'info',
              component: Info
            },
            {
              path: '/pc/hotel/staff',
              name: 'staff',
              component: Staff
            }
          ]
        }
      ]
    }
  ]
})
