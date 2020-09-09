import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'
import login from '../components/login.vue'
Vue.use(VueRouter)

  const routes = [
	  {
			path:'/',
			redirect:'/login'
	  },
	  {
			path:'/login',
			component:login
	  },
	  {
			path:'/index',
			component:index
	  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
