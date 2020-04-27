import Revenues from '@/store/modules/Revenues.module';
import { FAKE_REVENUES_ANSWERS } from '../../mocks/mockData.js';
import cloneDeep from 'lodash.clonedeep';

let state;
let getRevenuesItems;
let commit;

describe('Revenues Module', () => {
  beforeEach(() => {
    state = {
      revenuesItems: FAKE_REVENUES_ANSWERS
    };
    getRevenuesItems = FAKE_REVENUES_ANSWERS;
  });

  describe('Getters', () => {
    describe('getRevenuesItems', () => {
      it('should return the number of revenues items.', () => {
        const actual = Revenues.getters.getRevenuesItems(state);
        expect(actual).toEqual(state.revenuesItems);
      });
    });
    describe('getNumberOfRevenuesItems', () => {
      it('should return the number of revenues items.', () => {
        const actual = Revenues.getters.getNumberOfRevenuesItems(state, {
          getRevenuesItems
        });

        expect(actual).toEqual(state.revenuesItems.length);
      });
    });
    describe('getTotalMonthlyHouseholdRevenues', () => {
      it('should return the number of revenues items.', () => {
        const actual = Revenues.getters.getTotalMonthlyHouseholdRevenues(
          state,
          { getRevenuesItems }
        );
        expect(actual).toEqual(4400);
      });
    });
  });
});

describe('Mutations', () => {
  describe('ADD_REVENUES_ANSWERS', () => {
    beforeEach(() => {
      Revenues.mutations.ADD_REVENUES_ANSWERS(state, FAKE_REVENUES_ANSWERS);
    });
    it('should add the revenues answers in the state.', () => {
      expect(state.revenuesItems).toEqual(FAKE_REVENUES_ANSWERS);
    });
  });
});

describe('Actions', () => {
  describe('addRevenuesAnswers', () => {
    beforeEach(async () => {
      commit = jest.fn();
      await Revenues.actions.addRevenuesAnswers(
        { commit },
        FAKE_REVENUES_ANSWERS
      );
    });
    it('should call the mutation ADD_REVENUES_ANSWERS', async () => {
      expect(commit).toHaveBeenCalledWith(
        'ADD_REVENUES_ANSWERS',
        FAKE_REVENUES_ANSWERS
      );
    });
  });
});
