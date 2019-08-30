import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index"
// 引入注册组件
import Register from "./views/user/Register.vue"
// 引入登录组件
import Login from "./views/user/Login.vue"
// 引入详情组件
import Product from "./views/kind/Product.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/Login', component: Login},
    {path: '/Register', component: Register},
    {path: '/Product', component: Product}
    
  ]
})
