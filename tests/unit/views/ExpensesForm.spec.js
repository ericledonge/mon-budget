import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ExpensesForm from '@/views/ExpensesForm.vue';
import { FAKE_STEPS, FAKE_ANSWERS } from '../mocks/mockData';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

let wrapper;
let router;
let store = {};
let initialStore = {
  modules: {
    Expenses: {
      getters: {
        getExpensesTransportItems: jest.fn().mockReturnValue(FAKE_ANSWERS)
      },
      actions: {
        addExpensesTransport: jest.fn()
      }
    },
    Workflow: {
      getters: {
        getActiveStep: jest.fn().mockReturnValue(FAKE_STEPS[1]),
        getNextStepLink: jest.fn().mockReturnValue(FAKE_STEPS[1].item)
      },
      actions: {
        setActiveStep: jest.fn()
      }
    }
  }
};

const wrapperFactory = (component, storeOptions) => {
  store = new Vuex.Store({ ...storeOptions });
  router = new VueRouter();
  wrapper = new shallowMount(component, {
    localVue,
    store,
    router,
    mocks: {
      $t: () => {}
    },
    stubs: [
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

  it('should render the title', () => {
    const actualTitle = wrapper.find('[data-test="title"]').html();
    expect(actualTitle).toContain(FAKE_STEPS[1].item);
  });

  it('should render n lines for n expenses items', () => {
    const itemName = FAKE_STEPS[1].item;
    const subItemLines = wrapper.findAll(`[data-test="${itemName}-item"]`)
      .length;
    expect(subItemLines).toEqual(FAKE_ANSWERS.length);
  });

  describe('When the visitor submits the form', () => {
    it('should call the update data action', async () => {
      wrapper.find('[data-test="button-next"]').trigger('click');
      await wrapper.vm.$nextTick();
      expect(
        initialStore.modules.Expenses.actions.addExpensesTransport
      ).toHaveBeenCalled();
    });
  });
});
