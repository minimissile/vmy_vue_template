import Vue from 'vue'
import Router from 'vue-router'
import setting from '../setting'

Vue.use(Router)

const modulesContext = require.context('./modules', false, /\.js$/)

const chunks = modulesContext.keys().reduce((modules, key) => {
  modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key).default
  return modules
}, {})

const moduleNames = Object.keys(chunks)

const initRoutes = () => moduleNames.reduce((routes, moduleName) => {
  routes = routes.concat(chunks[moduleName])
  return routes
}, [])

const router = new Router({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  saveScrollPosition: true, // 保存页面切换的位置滚动
  routes: initRoutes(),
})

const title = setting.title || 'vmy_vue_template'
const getPageTitle = (pageTitle) => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

router.beforeEach((to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  // do some thing
  next()
})

router.afterEach((to, from) => {
  // do some thing
})

export default router
