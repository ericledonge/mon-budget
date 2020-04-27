import basicInfo from '@/store/modules/BasicInfo.module';
import { FAKE_BASIC_INFO_ANSWERS } from '../../mocks/mockData.js';

let state;
let commit;

describe('BasicInfo Module', () => {
  describe('getters', () => {
    describe('basicInfo', () => {
      beforeEach(() => {
        state = {
          ...FAKE_BASIC_INFO_ANSWERS
        };
      });
      it('should return the basic info', () => {
        expect(basicInfo.getters.basicInfo(state)).toEqual(
          FAKE_BASIC_INFO_ANSWERS
        );
      });
    });
  });

  describe('mutations', () => {
    describe('ADD_BASIC_INFO', () => {
      beforeEach(() => {
        state = {};
        basicInfo.mutations.ADD_BASIC_INFO(state, FAKE_BASIC_INFO_ANSWERS);
      });
      it('should mutate the state', () => {
        expect(state).toEqual(FAKE_BASIC_INFO_ANSWERS);
      });
    });
  });

  describe('actions', () => {
    describe('addBasicInfo', () => {
      beforeEach(async () => {
        commit = jest.fn();
        await basicInfo.actions.addBasicInfo(
          { commit },
          FAKE_BASIC_INFO_ANSWERS
        );
      });
      it('should call the mutation', async () => {
        expect(commit).toHaveBeenCalledWith(
          'ADD_BASIC_INFO',
          FAKE_BASIC_INFO_ANSWERS
        );
      });
    });
  });
});
