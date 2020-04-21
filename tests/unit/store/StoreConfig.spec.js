import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import storeConfig from '@/store/StoreConfig.js';
import cloneDeep from 'lodash.clonedeep';
import { FAKE_USER } from '../mocks/mockData.js';

const localVue = createLocalVue();
localVue.use(Vuex);

let clonedStoreConfig;
let store;

describe('Store', () => {
  beforeEach(() => {
    clonedStoreConfig = cloneDeep(storeConfig);
    store = new Vuex.Store(clonedStoreConfig);
  });

  describe('Mutations', () => {
    describe('ADD_BASIC_INFO', () => {
      beforeEach(() => {
        store.commit('ADD_BASIC_INFO', FAKE_USER);
      });
      it('should fill in the answer of basic information', () => {
        expect(store.getters['basicInfo']).toEqual(FAKE_USER);
      });
    });
  });

  describe('Actions', () => {
    describe('AddBasicInfo', () => {
      beforeEach(async () => {
        await store.dispatch('addBasicInfo', FAKE_USER);
      });
      it('should call the ADD_BASIC_INFO', () => {
        expect(store.getters['basicInfo']).toEqual(FAKE_USER);
      });
    });
  });
});
