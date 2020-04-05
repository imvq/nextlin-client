import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
