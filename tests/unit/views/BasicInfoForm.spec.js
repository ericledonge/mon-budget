import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import BasicInfoForm from '@/views/BasicInfoForm.vue';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(Vuelidate);

let wrapper;
let store;

let name = 'Toto';
let maritalStatus = 'Divorced';
let hasKids = true;

let initialStore = {
  modules: {
    BasicInfo: {
      getters: {
        basicInfo: jest.fn().mockReturnValue({
          name: null,
          maritalStatus: null,
          hasKids: false,
          numberOfKids: 0
        })
      },
      actions: {
        addBasicInfo: jest.fn()
      }
    },
    Workflow: {
      actions: {
        setActiveStep: jest.fn()
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

describe('BasicInfoForm', () => {
  describe('Until the form is completed', () => {
    it('should not be possible to continue to the next step', () => {
      wrapper = wrapperFactory(BasicInfoForm, initialStore);
      expect(
        wrapper.find('[data-test="button-next"]').attributes('disabled')
      ).toEqual('true');
    });
  });

  describe('When the form is completed', () => {
    it('should be possible to continue to the next step', async () => {
      wrapper = wrapperFactory(BasicInfoForm, initialStore);
      wrapper.setData({ maritalStatus, hasKids, name });
      await wrapper.vm.$nextTick();
      expect(
        wrapper.find('[data-test="button-next"]').attributes('disabled')
      ).toBe(undefined);
    });
  });

  describe('When the visitor told he/she has no kid', () => {
    it('should not be able to select how many he/she has', async () => {
      wrapper = wrapperFactory(BasicInfoForm, initialStore);
      wrapper.setData({ hasKids: false });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(false);
    });
  });

  describe('When the visitor told he/she has kids', () => {
    it('should be able to select how many he/she has', async () => {
      wrapper = wrapperFactory(BasicInfoForm, initialStore);
      wrapper.setData({ hasKids });
      await wrapper.vm.$nextTick();
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(true);
    });
  });

  describe('When the visitor submits the basic info form', () => {
    it('should call the addBasicInfo action', async () => {
      wrapper = wrapperFactory(BasicInfoForm, initialStore);
      wrapper.setData({ maritalStatus, hasKids, name });
      wrapper.find('[data-test="button-next"]').trigger('click');
      await wrapper.vm.$nextTick();
      expect(
        initialStore.modules.BasicInfo.actions.addBasicInfo
      ).toHaveBeenCalled();
    });
  });
});
