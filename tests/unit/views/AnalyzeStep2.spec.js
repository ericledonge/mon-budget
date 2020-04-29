import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AnalyzeStep2 from '@/views/AnalyzeStep2.vue';
import { FAKE_REVENUES_ANSWERS } from '../mocks/mockData';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
let store = {};
let initialStore = {
  modules: {
    Revenues: {
      getters: {
        getRevenuesItems: jest.fn().mockReturnValue(FAKE_REVENUES_ANSWERS)
      },
      actions: {
        addRevenuesAnswers: jest.fn()
      }
    },
    Workflow: {
      actions: {
        setCurrentStep: jest.fn()
      }
    }
  }
};

const wrapperFactory = (component, storeOptions) => {
  store = new Vuex.Store({ ...storeOptions });
  wrapper = new shallowMount(component, {
    localVue,
    store,
    mocks: {
      $t: () => {}
    },
    stubs: ['router-link', 'b-button', 'b-input', 'b-select', 'b-numberinput']
  });
  return wrapper;
};

describe('AnalyzeStep2', () => {
  beforeAll(() => {
    wrapper = wrapperFactory(AnalyzeStep2, initialStore);
  });

  it('should render.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render headers', () => {
    expect(wrapper.find('[data-test="headers"]').exists()).toBe(true);
  });

  it('should render n columns for n revenues items', () => {
    expect(wrapper.findAll('[data-test="revenues-item"]').length).toEqual(
      FAKE_REVENUES_ANSWERS.length
    );
  });

  it('should render the revenues item name', () => {
    expect(wrapper.find('[data-test="net-salaries"]').exists()).toBe(true);
  });

  it('should call the addRevenuesAnswers when submiting the form', async () => {
    wrapper.find('[data-test="button-next"]').trigger('click');
    await wrapper.vm.$nextTick();
    expect(
      initialStore.modules.Revenues.actions.addRevenuesAnswers
    ).toHaveBeenCalled();
  });

  it('should call the setCurrentStep when the page is loading', () => {
    expect(
      initialStore.modules.Workflow.actions.setCurrentStep
    ).toHaveBeenCalled();
  });
});
