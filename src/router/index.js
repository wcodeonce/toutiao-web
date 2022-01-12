import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  // 默认路由规则
  {
    path: '/',
    redirect: '/home'
  },
  // 首页的路由规则
  {
    path: '/home',
    component: Home
  },
  // 用户的路由规则
  {
    path: '/user',
    component: User
  }
]

// 创建路由对象
const router = new VueRouter({
  routes
})

export default router
