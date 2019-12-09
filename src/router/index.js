import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:"首页"
    }

  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:"关于"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue'),


},

  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Personal.vue'),
    meta:{
      title:"个人中心"
    },

  }
  ,
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
    meta:{
      title:"首页"
    }

  },
  {
    path: '/Research',
    name: 'Research',
    meta:{
      title:"搜索"
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/Research.vue'),


  }
  ,
  {
    path: '/Settlement',
    name: 'Settlement',
    meta:{
      title:"搜索"
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/Settlement.vue'),


  }


]

const router = new VueRouter({
  publicPath : '/',
  mode: 'history',
  routes
})

export default router
