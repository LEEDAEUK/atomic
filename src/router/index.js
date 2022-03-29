import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import(/* webpackChunkName: "LoginPage" */ '../views/LoginPage.vue'),
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () =>
      import(/* webpackChunkName: "MainPage" */ '../views/MainPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/user/:id',
    name: 'UserDetailPage',
    component: () =>
      import(
        /* webpackChunkName: "UserDetailPage" */ '../views/UserDetailPage.vue'
      ),
    meta: { auth: true },
  },
  {
    path: '/graph',
    name: 'GraphPage',
    component: () =>
      import(/* webpackChunkName: "GraphPage" */ '../views/GraphPage.vue'),
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
  } else if (to.path == '/login' && store.getters['userStore/IS_LOGINED']) {
    next('/main');
    return;
  }
  next();
});

export default router;
