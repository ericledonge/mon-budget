import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AnalyzeStep1 from '@/views/AnalyzeStep1.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
let store;
let initialStore;

initialStore = {
  modules: {
    BasicInfo: {
      actions: {
        addBasicInfo: jest.fn()
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
    stubs: [
      'router-link',
      'b-button',
      'b-radio',
      'b-field',
      'b-input',
      'b-select',
      'b-numberinput'
    ]
  });
  return wrapper;
};

describe('AnalyzeStep1', () => {
  describe('Until the form is completed', () => {
    beforeAll(() => {
      wrapper = wrapperFactory(AnalyzeStep1, initialStore);
    });

    it('should not be possible to continue to the next step', () => {
      expect(
        wrapper.find('[data-test="button-next"]').attributes('disabled')
      ).toEqual('true');
    });
  });

  describe('When the form is completed', () => {
    beforeAll(() => {
      wrapper = wrapperFactory(AnalyzeStep1, initialStore);
      wrapper.setData({
        maritalStatus: 'Marié',
        hasKids: true,
        name: 'Toto'
      });
    });

    it('should be possible to continue to the next step', () => {
      expect(
        wrapper.find('[data-test="button-next"]').attributes('disabled')
      ).toBe(undefined);
    });
  });

  describe('When the visitor told he/she has no kid', () => {
    beforeAll(() => {
      wrapper = wrapperFactory(AnalyzeStep1, initialStore);
      wrapper.setData({
        hasKids: false
      });
    });
    it('should not be able to select how many he/she has', () => {
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(false);
    });
  });

  describe('When the visitor told he/she has kids', () => {
    beforeAll(() => {
      wrapper = wrapperFactory(AnalyzeStep1, initialStore);
      wrapper.setData({
        hasKids: true
      });
    });
    it('should be able to select how many he/she has', () => {
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(true);
    });
  });

  describe('When the visitor submits the basic info form', () => {
    beforeAll(() => {
      wrapper = wrapperFactory(AnalyzeStep1, initialStore);
    });
    it('should call the addBasicInfo action', async () => {
      wrapper.find('[data-test="button-next"]').trigger('click');
      await wrapper.vm.$nextTick();
      expect(
        initialStore.modules.BasicInfo.actions.addBasicInfo
      ).toHaveBeenCalled();
    });
  });
});
