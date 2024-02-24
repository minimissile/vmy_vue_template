import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import handleRequest from '../utils/request'
import API from '../api/api'
import globalStore from './globalStore'

Vue.use(Vuex)

// 数据持久化配置
const vuexPersist = new VuexPersistence({
  strictMode: process.env.NODE_ENV !== 'production',
  supportCircular: true,
  storage: window.localStorage, // 存入localStorage
});

const modulesContext = require.context('./modules', false, /\.js$/)

const chunks = modulesContext.keys().reduce((modules, key) => {
  modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key).default
  return modules
}, {})

const moduleNames = Object.keys(chunks)

const initMudules = (handleRequest, API) => moduleNames.reduce((modules, moduleName) => {
  modules[moduleName] = chunks[moduleName](handleRequest, API)
  return modules
}, {})

const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  strict: debug,
  plugins: [vuexPersist.plugin],
  ...globalStore(handleRequest, API, vuexPersist.RESTORE_MUTATION),
  modules: initMudules(handleRequest, API)
})
