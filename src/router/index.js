import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AnalyzeStep1 from '@/views/AnalyzeStep1.vue';
import Summary from '@/views/Summary.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/analyze/step-1',
    name: 'AnalyzeStep1',
    component: AnalyzeStep1
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
