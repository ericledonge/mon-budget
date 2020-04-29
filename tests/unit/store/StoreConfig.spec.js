import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import storeConfig from '@/store/StoreConfig.js';
import cloneDeep from 'lodash.clonedeep';
import {
  FAKE_BASIC_INFO_ANSWERS,
  FAKE_REVENUES_ANSWERS
} from '../mocks/mockData.js';

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
      beforeEach(async () => {
        await store.dispatch('addBasicInfo', FAKE_BASIC_INFO_ANSWERS);
      });
      it('should save his basic info in the store', () => {
        expect(store.getters['basicInfo']).toEqual(FAKE_BASIC_INFO_ANSWERS);
      });
    });

    describe('AddRevenuesAnswers - When the user submits his revenues answers', () => {
      beforeEach(async () => {
        await store.dispatch('addRevenuesAnswers', FAKE_REVENUES_ANSWERS);
      });
      it('should save his revenues answers in the store', () => {
        expect(store.getters['getRevenuesItems']).toEqual(
          FAKE_REVENUES_ANSWERS
        );
      });
    });

    describe('setCurrentStep - When the user goes to the next step', () => {
      const stepNumber = 3;
      beforeEach(async () => {
        await store.dispatch('setCurrentStep', stepNumber);
      });
      it('should update his current step in the workflow', () => {
        expect(store.getters['getCurrentStep']).toEqual(stepNumber);
      });
    });
  });
});
