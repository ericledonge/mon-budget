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
let revenues = 5000;
let housingExpenses = 1368;
let transportExpenses = 852;
let insuranceExpenses = 100;
let foodExpenses = 649;
let leisureExpenses = 312;
let educationExpenses = 83;
let healthExpenses = 243;
let variousExpenses = 356;
let sumExpenses =
  housingExpenses +
  transportExpenses +
  insuranceExpenses +
  foodExpenses +
  leisureExpenses +
  educationExpenses +
  healthExpenses +
  variousExpenses;

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
        getRevenuesSum: jest.fn().mockReturnValue(revenues),
        getExpensesHousingSum: jest.fn().mockReturnValue(housingExpenses),
        getExpensesTransportSum: jest.fn().mockReturnValue(transportExpenses),
        getExpensesInsuranceSum: jest.fn().mockReturnValue(insuranceExpenses),
        getExpensesFoodSum: jest.fn().mockReturnValue(foodExpenses),
        getExpensesLeisureSum: jest.fn().mockReturnValue(leisureExpenses),
        getExpensesEducationSum: jest.fn().mockReturnValue(educationExpenses),
        getExpensesHealthSum: jest.fn().mockReturnValue(healthExpenses),
        getExpensesVariousSum: jest.fn().mockReturnValue(variousExpenses)
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
  describe('When the visitors tells us his revenues', () => {
    it('should render the revenues.', () => {
      wrapper = wrapperFactory(Summary, initialStore);
      expect(wrapper.find('[data-test="revenues"]').text()).toContain(revenues);
    });
  });

  describe('When the visitors tells us his housing expenses', () => {
    it('should render the housing expenses.', () => {
      wrapper = wrapperFactory(Summary, initialStore);
      expect(wrapper.find('[data-test="housing-expenses"]').text()).toContain(
        housingExpenses
      );
    });
  });
});
