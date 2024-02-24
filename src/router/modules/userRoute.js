export default [
  { // 登录
    path: '/login',
    name: 'Login',
    component: () => import('@views/login/index.vue'),
    meta: {
      keepAlive: false,
      title: '登录'
    }
  }
]
