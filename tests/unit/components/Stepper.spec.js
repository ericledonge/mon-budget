import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Stepper from '@/components/Stepper.vue';
import { FAKE_STEPS } from '../mocks/mockData';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
let store = {};
let initialStore = {
  modules: {
    workflow: {
      getters: {
        getAllSteps: jest.fn().mockReturnValue(FAKE_STEPS),
        getActiveStep: jest.fn().mockReturnValue(FAKE_STEPS[1])
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
    stubs: ['b-steps', 'b-step-item']
  });
  return wrapper;
};

describe('Stepper', () => {
  it('should render.', () => {
    wrapper = wrapperFactory(Stepper, initialStore);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the correct number of steps', () => {
    wrapper = wrapperFactory(Stepper, initialStore);
    const steps = wrapper.findAll('[data-test="step"]');
    expect(steps.length).toEqual(FAKE_STEPS.length);
  });
});
