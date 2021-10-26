import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 这是路由的规则数组
const routes = []

// 用写好的规则数组，配置路由对象
const router = new VueRouter({
  routes
})

// 最后把配置好的路由对象暴露出去（导出）
export default router
