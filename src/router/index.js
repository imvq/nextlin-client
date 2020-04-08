import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/404',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'Nextlin | Home'
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work.vue'),
      meta: {
        title: 'Nextlin | Analyse'
      }
    },
  ]
});
