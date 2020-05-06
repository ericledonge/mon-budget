import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import RevenuesForm from '@/views/RevenuesForm.vue';
import { FAKE_ANSWERS } from '../mocks/mockData';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(Vuex);
localVue.use(VueRouter);

let wrapper;
let store = {};
let initialStore = {
  modules: {
    Revenues: {
      getters: {
        getRevenuesItems: jest.fn().mockReturnValue(FAKE_ANSWERS)
      },
      actions: {
        addRevenues: jest.fn()
      }
    },
    Workflow: {
      actions: {
        incrementStep: jest.fn()
      }
    }
  }
};

const wrapperFactory = (component, storeOptions) => {
  store = new Vuex.Store({ ...storeOptions });
  wrapper = new shallowMount(component, {
    localVue,
    store,
    router,
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

describe('RevenuesForm', () => {
  beforeAll(() => {
    wrapper = wrapperFactory(RevenuesForm, initialStore);
  });

  it('should render.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render n columns for n revenues items', () => {
    expect(wrapper.findAll('[data-test="revenues-item"]').length).toEqual(
      FAKE_ANSWERS.length
    );
  });

  it('should call the addRevenues when submiting the form', async () => {
    wrapper.find('[data-test="button-next"]').trigger('click');
    await wrapper.vm.$nextTick();
    expect(
      initialStore.modules.Revenues.actions.addRevenues
    ).toHaveBeenCalled();
  });
});
