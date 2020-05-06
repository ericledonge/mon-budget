import Expenses from '@/store/modules/Expenses.module';
import {
  FAKE_HOUSING_ANSWERS,
  FAKE_TRANSPORT_ANSWERS,
  FAKE_INSURANCE_ANSWERS,
  FAKE_FOOD_ANSWERS,
  FAKE_LEISURE_ANSWERS,
  FAKE_EDUCATION_ANSWERS,
  FAKE_HEALTH_ANSWERS,
  FAKE_VARIOUS_ANSWERS
} from '../../mocks/mockData.js';

let state;
let commit;

describe('Expenses Module', () => {
  beforeEach(() => {
    state = {};
  });

  describe('Getters', () => {
    it('getExpensesHousingItems', () => {
      state.housing = FAKE_HOUSING_ANSWERS;
      const actual = Expenses.getters.getExpensesHousingItems(state);
      expect(actual).toEqual(state.housing);
    });
    it('getExpensesTransportItems', () => {
      state.transport = FAKE_TRANSPORT_ANSWERS;
      const actual = Expenses.getters.getExpensesTransportItems(state);
      expect(actual).toEqual(state.transport);
    });
  });

  describe('Mutations', () => {
    describe('ADD_EXPENSES_HOUSING', () => {
      it('should add the housing expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_HOUSING(state, FAKE_HOUSING_ANSWERS);
        expect(state.housing).toEqual(FAKE_HOUSING_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_TRANSPORT', () => {
      it('should add the transport expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_TRANSPORT(
          state,
          FAKE_TRANSPORT_ANSWERS
        );
        expect(state.transport).toEqual(FAKE_TRANSPORT_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_INSURANCE', () => {
      it('should add the insurance expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_INSURANCE(
          state,
          FAKE_INSURANCE_ANSWERS
        );
        expect(state.insurance).toEqual(FAKE_INSURANCE_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_FOOD', () => {
      it('should add the food expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_FOOD(state, FAKE_FOOD_ANSWERS);
        expect(state.food).toEqual(FAKE_FOOD_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_LEISURE', () => {
      it('should add the leisure expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_LEISURE(state, FAKE_LEISURE_ANSWERS);
        expect(state.leisure).toEqual(FAKE_LEISURE_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_EDUCATION', () => {
      it('should add the education expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_EDUCATION(
          state,
          FAKE_EDUCATION_ANSWERS
        );
        expect(state.education).toEqual(FAKE_EDUCATION_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_HEALTH', () => {
      it('should add the health expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_HEALTH(state, FAKE_HEALTH_ANSWERS);
        expect(state.health).toEqual(FAKE_HEALTH_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_VARIOUS', () => {
      it('should add the various expenses answers in the state.', () => {
        Expenses.mutations.ADD_EXPENSES_VARIOUS(state, FAKE_VARIOUS_ANSWERS);
        expect(state.various).toEqual(FAKE_VARIOUS_ANSWERS);
      });
    });
  });

  describe('Actions', () => {
    beforeEach(() => {
      commit = jest.fn();
    });
    describe('addExpensesHousing', () => {
      it('should call the mutation ADD_EXPENSES_HOUSING.', async () => {
        await Expenses.actions.addExpensesHousing(
          { commit },
          FAKE_HOUSING_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_HOUSING',
          FAKE_HOUSING_ANSWERS
        );
      });
    });
    describe('addExpensesTransport', () => {
      it('should call the mutation ADD_EXPENSES_TRANSPORT.', async () => {
        await Expenses.actions.addExpensesTransport(
          { commit },
          FAKE_TRANSPORT_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_TRANSPORT',
          FAKE_TRANSPORT_ANSWERS
        );
      });
    });
    describe('addExpensesInsurance', () => {
      it('should call the mutation ADD_EXPENSES_INSURANCE.', async () => {
        await Expenses.actions.addExpensesInsurance(
          { commit },
          FAKE_INSURANCE_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_INSURANCE',
          FAKE_INSURANCE_ANSWERS
        );
      });
    });
    describe('addExpensesFood', () => {
      it('should call the mutation ADD_EXPENSES_FOOD.', async () => {
        await Expenses.actions.addExpensesFood({ commit }, FAKE_FOOD_ANSWERS);
        expect(commit).toBeCalledWith('ADD_EXPENSES_FOOD', FAKE_FOOD_ANSWERS);
      });
    });
    describe('addExpensesLeisure', () => {
      it('should call the mutation ADD_EXPENSES_LEISURE.', async () => {
        await Expenses.actions.addExpensesLeisure(
          { commit },
          FAKE_LEISURE_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_LEISURE',
          FAKE_LEISURE_ANSWERS
        );
      });
    });
    describe('addExpensesEducation', () => {
      it('should call the mutation ADD_EXPENSES_EDUCATION.', async () => {
        await Expenses.actions.addExpensesEducation(
          { commit },
          FAKE_EDUCATION_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_EDUCATION',
          FAKE_EDUCATION_ANSWERS
        );
      });
    });
    describe('addExpensesHealth', () => {
      it('should call the mutation ADD_EXPENSES_HEALTH.', async () => {
        await Expenses.actions.addExpensesHealth(
          { commit },
          FAKE_HEALTH_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_HEALTH',
          FAKE_HEALTH_ANSWERS
        );
      });
    });
    describe('addExpensesVarious', () => {
      it('should call the mutation ADD_EXPENSES_VARIOUS.', async () => {
        await Expenses.actions.addExpensesVarious(
          { commit },
          FAKE_VARIOUS_ANSWERS
        );
        expect(commit).toBeCalledWith(
          'ADD_EXPENSES_VARIOUS',
          FAKE_VARIOUS_ANSWERS
        );
      });
    });
  });
});
