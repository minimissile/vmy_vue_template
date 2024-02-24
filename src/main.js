// 导入垫片库(polyfill), 需要放置在当前页最顶部
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import './assets/styles/index.less'

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

const Container = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default Container
