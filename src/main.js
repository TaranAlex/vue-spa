import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Users from './components/Users.vue'
import Hello from './components/Hello.vue'
import User from './components/User.vue'
import UserEdit from './components/UserEdit.vue'
import UserDelete from './components/UserDelete.vue'
import {store} from '../store';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Hello,
    },
    {
      path: '/users',
      name:'users',
      component: Users,
      children: [
        {
          path: 'user/:id',
          name:'user',
          component: User,
          props: true,
        },
        {
          path: 'user/:id/edit',
          name:'userEdit',
          component: UserEdit,
          props: true,
        },
        {
          path: 'user/:id/delete',
          name:'userDelete',
          component: UserDelete,
          props: true,
        },
      ]
    },
  ]
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
