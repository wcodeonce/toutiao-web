import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 vant 组件库
import Vant from 'vant'
// import 'vant/lib/index.css'
// 为了能够覆盖默认的 less 变量，一定要引入 Less 样式文件
import 'vant/lib/index.less'

// 安装 vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
