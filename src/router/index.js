import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BasicInfoForm from '@/views/BasicInfoForm.vue';
import RevenuesForm from '@/views/RevenuesForm.vue';
import ExpensesForm from '@/views/ExpensesForm.vue';
import Summary from '@/views/Summary.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basic-info',
    name: 'BasicInfoForm',
    meta: { layout: 'workflow' },
    component: BasicInfoForm
  },
  {
    path: '/revenues',
    name: 'RevenuesForm',
    meta: { layout: 'workflow' },
    component: RevenuesForm
  },
  {
    path: '/expenses/:item',
    name: 'ExpensesForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm
  },
  {
    path: '/summary',
    name: 'Summary',
    meta: { layout: 'workflow' },
    component: Summary
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
