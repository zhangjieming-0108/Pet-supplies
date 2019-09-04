import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 完整引入mint-ui组件库中的所有组件
import MintUI from 'mint-ui'
// 2.单独引入mint-ui组件中的样式文件
import "mint-ui/lib/style.css"
// 注册mint-ui
Vue.use(MintUI)
// 配置axios，引入第三方ajax请求模块
import axios from 'axios'
// 注册axios，由于axios不支持use将实列添加vue原型
Vue.prototype.axios=axios;
// 配置axios基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
// 配置axios保存sess信息
axios.defaults.withCredentials=true

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
