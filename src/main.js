import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
});

import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

import router from './router';
import Vuex from 'vuex';
import storeConfig from '@/store/StoreConfig';
import './registerServiceWorker';
import i18n from './i18n';
import App from './App.vue';

Vue.use(Vuex);

import WorkflowLayout from '@/layouts/WorkflowLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MoneyInput from '@/components/MoneyInput.vue';
import FormHeader from '@/components/FormHeader.vue';

Vue.component('workflow-layout', WorkflowLayout);
Vue.component('default-layout', DefaultLayout);
Vue.component('money-input', MoneyInput);
Vue.component('form-header', FormHeader);

const store = new Vuex.Store(storeConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
