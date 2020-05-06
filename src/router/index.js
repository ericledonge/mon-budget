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
    path: '/expenses/housing',
    name: 'ExpensesHousingForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'housing',
      dataItems: 'getExpensesHousingItems',
      action: 'addExpensesHousing',
      url: '/expenses/transport'
    }
  },
  {
    path: '/expenses/transport',
    name: 'ExpensesTransportForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'transport',
      dataItems: 'getExpensesTransportItems',
      action: 'addExpensesTransport',
      url: '/expenses/insurance'
    }
  },
  {
    path: '/expenses/insurance',
    name: 'ExpensesInsuranceForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'insurance',
      dataItems: 'getExpensesInsuranceItems',
      action: 'addExpensesInsurance',
      url: '/expenses/food'
    }
  },
  {
    path: '/expenses/food',
    name: 'ExpensesFoodForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'food',
      dataItems: 'getExpensesFoodItems',
      action: 'addExpensesFood',
      url: '/expenses/leisure'
    }
  },
  {
    path: '/expenses/leisure',
    name: 'ExpensesLeisureForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'leisure',
      dataItems: 'getExpensesLeisureItems',
      action: 'addExpensesLeisure',
      url: '/expenses/education'
    }
  },
  {
    path: '/expenses/education',
    name: 'ExpensesEducationForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'education',
      dataItems: 'getExpensesEducationItems',
      action: 'addExpensesEducation',
      url: '/expenses/health'
    }
  },
  {
    path: '/expenses/health',
    name: 'ExpensesHealthForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'health',
      dataItems: 'getExpensesHealthItems',
      action: 'addExpensesHealth',
      url: '/expenses/various'
    }
  },

  {
    path: '/expenses/various',
    name: 'ExpensesVariousForm',
    meta: { layout: 'workflow' },
    component: ExpensesForm,
    props: {
      topic: 'various',
      dataItems: 'getExpensesVariousItems',
      action: 'addExpensesVarious',
      url: '/summary'
    }
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
