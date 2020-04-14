import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Analyze from '@/views/Analyze.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Analyze
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
