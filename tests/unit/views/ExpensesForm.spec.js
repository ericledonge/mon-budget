import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ExpensesForm from '@/views/ExpensesForm.vue';
import { FAKE_ANSWERS } from '../mocks/mockData';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(Vuex);
localVue.use(VueRouter);

let wrapper;
let store = {};
let initialStore = {
  modules: {
    Expenses: {
      getters: {
        getExpensesHousingItems: jest.fn().mockReturnValue(FAKE_ANSWERS)
      },
      actions: {
        addExpensesHousing: jest.fn()
      }
    },
    Workflow: {
      actions: {
        incrementStep: jest.fn()
      }
    }
  }
};
let $route = { path: '/some/path' };
let props = {
  topic: 'housing',
  dataItems: 'getExpensesHousingItems',
  action: 'addExpensesHousing',
  url: '/expenses/transport'
};

const wrapperFactory = (component, storeOptions) => {
  store = new Vuex.Store({ ...storeOptions });
  wrapper = new shallowMount(component, {
    localVue,
    store,
    router,
    propsData: props,
    mocks: {
      $t: () => {}
    },
    stubs: [
      'router-link',
      'b-button',
      'b-input',
      'b-select',
      'b-numberinput',
      'form-header',
      'money-input'
    ]
  });
  return wrapper;
};

describe('ExpensesForm', () => {
  beforeAll(() => {
    wrapper = wrapperFactory(ExpensesForm, initialStore);
  });

  it('should render.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render n lines for n expenses items', () => {
    expect(wrapper.findAll('[data-test="housing-item"]').length).toEqual(
      FAKE_ANSWERS.length
    );
  });

  it('should render n items for n expenses items', () => {
    expect(wrapper.vm.items.length).toEqual(FAKE_ANSWERS.length);
  });
});
