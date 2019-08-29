import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index"
import Register from "./views/user/Register.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/Register', component: Register}
    
  ]
})
