export default [
  { // 主页
    path: '/',
    redirect: '/home',
  },
  { // 主页
    path: '/home',
    name: 'Name',
    component: () => import('@views/home/index.vue'),
    meta: {
      keepAlive: false,
      title: '首页'
    }
  },
  {
    path: '*',
    redirect: '/home',
  },
]
