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

  describe('Getters', () => {
    it('should return the number of revenues items', () => {
      expect(store.getters['getNumberOfRevenuesItems']).toEqual(8);
    });
  });

  describe('Mutations', () => {
    describe('ADD_BASIC_INFO', () => {
      beforeEach(() => {
        store.commit('ADD_BASIC_INFO', FAKE_BASIC_INFO_ANSWERS);
      });
      it('should fill in the answer of basic information', () => {
        expect(store.getters['basicInfo']).toEqual(FAKE_BASIC_INFO_ANSWERS);
      });
    });
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
  });
});
