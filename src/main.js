import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css和less文件的时候，是不需要起名字的（因为脚手架中有css预处理器less,所以我们可以直接用less写样式）
import './styles/index.less'

// 导入vant模块（vant的核心组件库）
import Vant from 'vant'
// 导入vant模块的css
import 'vant/lib/index.css'
// 注册vant模块（注册使用vant组件库）
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
