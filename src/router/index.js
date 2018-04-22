import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Cart from '../pages/Cart'
import Admin from '../pages/Admin'
import Index from '../pages/Admin/Index'
import New from '../pages/Admin/New'
import Products from '../pages/Admin/Products'
import Edit from '../pages/Admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})