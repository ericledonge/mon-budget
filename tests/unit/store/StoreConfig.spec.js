import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import storeConfig from '@/store/StoreConfig.js';
import cloneDeep from 'lodash.clonedeep';
import { FAKE_BASIC_INFO_ANSWERS, FAKE_ANSWERS } from '../mocks/mockData.js';

const localVue = createLocalVue();
localVue.use(Vuex);

let clonedStoreConfig;
let store;

describe('Store', () => {
  beforeEach(() => {
    clonedStoreConfig = cloneDeep(storeConfig);
    store = new Vuex.Store(clonedStoreConfig);
  });

  describe('Actions', () => {
    describe('AddBasicInfo - When the user submits his basic info', () => {
      it('should save his basic info in the store', async () => {
        await store.dispatch('addBasicInfo', FAKE_BASIC_INFO_ANSWERS);
        expect(store.getters['basicInfo']).toEqual(FAKE_BASIC_INFO_ANSWERS);
      });
    });

    describe('AddRevenuesAnswers - When the user submits his revenues answers', () => {
      it('should save his revenues answers in the store', async () => {
        await store.dispatch('addRevenues', FAKE_ANSWERS);
        expect(store.getters['getRevenuesItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('addExpensesHousing - When the user submits his housing expenses', () => {
      it('should save his housing expenses answers in the store', async () => {
        await store.dispatch('addExpensesHousing', FAKE_ANSWERS);
        expect(store.getters['getExpensesHousingItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('addExpensesTransport - When the user submits his transporting expenses', () => {
      it('should save his transporting expenses answers in the store', async () => {
        await store.dispatch('addExpensesTransport', FAKE_ANSWERS);
        expect(store.getters['getExpensesTransportItems']).toEqual(
          FAKE_ANSWERS
        );
      });
    });

    describe('addExpensesInsurance - When the user submits his insurance expenses', () => {
      it('should save his insurance expenses answers in the store', async () => {
        await store.dispatch('addExpensesInsurance', FAKE_ANSWERS);
        expect(store.getters['getExpensesInsuranceItems']).toEqual(
          FAKE_ANSWERS
        );
      });
    });

    describe('addExpensesFood - When the user submits his food expenses', () => {
      it('should save his food expenses answers in the store', async () => {
        await store.dispatch('addExpensesFood', FAKE_ANSWERS);
        expect(store.getters['getExpensesFoodItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('addExpensesLeisure - When the user submits his leisure expenses', () => {
      it('should save his leisure expenses answers in the store', async () => {
        await store.dispatch('addExpensesLeisure', FAKE_ANSWERS);
        expect(store.getters['getExpensesLeisureItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('addExpensesEducation - When the user submits his education expenses', () => {
      it('should save his education expenses answers in the store', async () => {
        await store.dispatch('addExpensesEducation', FAKE_ANSWERS);
        expect(store.getters['getExpensesEducationItems']).toEqual(
          FAKE_ANSWERS
        );
      });
    });

    describe('addExpensesHealth - When the user submits his health expenses', () => {
      it('should save his health expenses answers in the store', async () => {
        await store.dispatch('addExpensesHealth', FAKE_ANSWERS);
        expect(store.getters['getExpensesHealthItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('addExpensesVarious - When the user submits his various expenses', () => {
      it('should save his various expenses answers in the store', async () => {
        await store.dispatch('addExpensesVarious', FAKE_ANSWERS);
        expect(store.getters['getExpensesVariousItems']).toEqual(FAKE_ANSWERS);
      });
    });

    describe('setCurrentStep - When the user goes to the next step', () => {
      it('should update his current step in the workflow', async () => {
        const stepNumber = 3;
        await store.dispatch('setCurrentStep', stepNumber);
        expect(store.getters['getCurrentStep']).toEqual(stepNumber);
      });
    });
  });
});
