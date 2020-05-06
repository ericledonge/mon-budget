import Revenues from '@/store/modules/Revenues.module';
import { FAKE_ANSWERS, FAKE_AMOUNT_ANSWERS } from '../../mocks/mockData.js';

let state;
let getRevenuesItems;
let commit;

describe('Revenues Module', () => {
  beforeEach(() => {
    state = {
      revenuesItems: FAKE_ANSWERS
    };
    getRevenuesItems = FAKE_ANSWERS;
  });

  describe('Getters', () => {
    describe('getRevenuesItems', () => {
      it('should return the number of revenues items.', () => {
        const actual = Revenues.getters.getRevenuesItems(state);
        expect(actual).toEqual(state.revenuesItems);
      });
    });
    describe('getRevenuesSum', () => {
      it('should return the number of revenues items.', () => {
        const actual = Revenues.getters.getRevenuesSum(state, {
          getRevenuesItems
        });
        expect(actual).toEqual(FAKE_AMOUNT_ANSWERS());
      });
    });
  });
});

describe('Mutations', () => {
  describe('ADD_REVENUES', () => {
    beforeEach(() => {
      Revenues.mutations.ADD_REVENUES(state, FAKE_ANSWERS);
    });
    it('should add the revenues answers in the state.', () => {
      expect(state.revenuesItems).toEqual(FAKE_ANSWERS);
    });
  });
});

describe('Actions', () => {
  describe('addRevenues', () => {
    beforeEach(async () => {
      commit = jest.fn();
      await Revenues.actions.addRevenues({ commit }, FAKE_ANSWERS);
    });
    it('should call the mutation ADD_REVENUES', async () => {
      expect(commit).toHaveBeenCalledWith('ADD_REVENUES', FAKE_ANSWERS);
    });
  });
});
