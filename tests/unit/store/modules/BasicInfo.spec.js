import basicInfo from '@/store/modules/BasicInfo.module';
import { INITIAL_STATE, FAKE_USER } from '../../mocks/mockData.js';

let state;
let commit;

describe('BasicInfo', () => {
  describe('getters', () => {
    describe('basicInfo', () => {
      beforeEach(() => {
        state = {
          ...FAKE_USER
        };
      });
      it('should return the basic info', () => {
        expect(basicInfo.getters.basicInfo(state)).toEqual(FAKE_USER);
      });
    });
  });

  describe('mutations', () => {
    describe('ADD_BASIC_INFO', () => {
      beforeEach(() => {
        state = {
          ...INITIAL_STATE
        };
        basicInfo.mutations.ADD_BASIC_INFO(state, FAKE_USER);
      });
      it('should mutate the state', () => {
        expect(state).toEqual(FAKE_USER);
      });
    });
  });

  describe('actions', () => {
    describe('addBasicInfo', () => {
      beforeEach(async () => {
        commit = jest.fn();
        await basicInfo.actions.addBasicInfo({ commit }, FAKE_USER);
      });
      it('should call the mutation', async () => {
        expect(commit).toHaveBeenCalledWith('ADD_BASIC_INFO', FAKE_USER);
      });
    });
  });
});
