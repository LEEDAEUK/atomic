import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginPage.vue'),
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
    meta: { auth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['userStore/IS_LOGINED']) {
    next('/login');
    //return 넣는것이 포인트, 그래야 아래 return을 실행하지 않는다
    return;
  }
  next();
});

export default router;
