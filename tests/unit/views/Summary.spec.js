import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Summary from '@/views/Summary.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
let store;

let username = 'Toto';
let maritalStatus = 'Divorced';
let hasKids = true;
let numberOfKids = 2;
let totalMonthlyHouseholdRevenues = 4600;

let initialStore = {
  modules: {
    BasicInfo: {
      getters: {
        username: jest.fn().mockReturnValue(username),
        maritalStatus: jest.fn().mockReturnValue(maritalStatus),
        hasKids: jest.fn().mockReturnValue(hasKids),
        numberOfKids: jest.fn().mockReturnValue(numberOfKids)
      }
    },
    Revenues: {
      getters: {
        getTotalMonthlyHouseholdRevenues: jest
          .fn()
          .mockReturnValue(totalMonthlyHouseholdRevenues)
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
    }
  });
  return wrapper;
};

describe('Summary', () => {
  it('should render the username', () => {
    wrapper = wrapperFactory(Summary, initialStore);
    expect(wrapper.find('[data-test="name"]').text()).toContain(username);
  });

  describe('When the visitors tells us he has kids', () => {
    it('should render the kids section', () => {
      wrapper = wrapperFactory(Summary, initialStore);
      expect(wrapper.find('[data-test="number-kids"]').text()).toContain(
        numberOfKids
      );
    });
  });

  describe('When the visitors tells us his revenues', () => {
    it('should render the revenues section', () => {
      wrapper = wrapperFactory(Summary, initialStore);
      expect(
        wrapper.find('[data-test="total-monthly-household-revenues"]').text()
      ).toContain(totalMonthlyHouseholdRevenues);
    });
  });

  describe('When the page has loaded', () => {
    it('should call the setCurrentStep', () => {
      wrapper = wrapperFactory(Summary, initialStore);
      expect(
        initialStore.modules.Workflow.actions.setCurrentStep
      ).toHaveBeenCalled();
    });
  });
});
