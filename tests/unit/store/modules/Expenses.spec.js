import HousingExpenses from '@/store/modules/expenses/HousingExpenses.module';
import TransportExpenses from '@/store/modules/expenses/TransportExpenses.module';
import InsuranceExpenses from '@/store/modules/expenses/InsuranceExpenses.module';
import FoodExpenses from '@/store/modules/expenses/FoodExpenses.module';
import LeisureExpenses from '@/store/modules/expenses/LeisureExpenses.module';
import EducationExpenses from '@/store/modules/expenses/EducationExpenses.module';
import HealthExpenses from '@/store/modules/expenses/HealthExpenses.module';
import VariousExpenses from '@/store/modules/expenses/VariousExpenses.module';

import {
  FAKE_EDUCATION_ANSWERS,
  FAKE_FOOD_ANSWERS,
  FAKE_HEALTH_ANSWERS,
  FAKE_HOUSING_ANSWERS,
  FAKE_INSURANCE_ANSWERS,
  FAKE_LEISURE_ANSWERS,
  FAKE_TRANSPORT_ANSWERS,
  FAKE_VARIOUS_ANSWERS
} from '../../mocks/mockData.js';

let state;
let commit;

describe('expenses Module', () => {
  beforeEach(() => {
    state = {};
  });

  describe('Getters', () => {
    it('getExpensesHousingItems', () => {
      state.housing = FAKE_HOUSING_ANSWERS;
      const actual = HousingExpenses.getters.getExpensesHousingItems(state);
      expect(actual).toEqual(state.housing);
    });
    it('getExpensesTransportItems', () => {
      state.transport = FAKE_TRANSPORT_ANSWERS;
      const actual = TransportExpenses.getters.getExpensesTransportItems(state);
      expect(actual).toEqual(state.transport);
    });
  });

  describe('Mutations', () => {
    describe('ADD_EXPENSES_HOUSING', () => {
      it('should add the housing expenses answers in the state.', () => {
        HousingExpenses.mutations.ADD_EXPENSES_HOUSING(
          state,
          FAKE_HOUSING_ANSWERS
        );
        expect(state.housing).toEqual(FAKE_HOUSING_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_TRANSPORT', () => {
      it('should add the transport expenses answers in the state.', () => {
        TransportExpenses.mutations.ADD_EXPENSES_TRANSPORT(
          state,
          FAKE_TRANSPORT_ANSWERS
        );
        expect(state.transport).toEqual(FAKE_TRANSPORT_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_INSURANCE', () => {
      it('should add the insurance expenses answers in the state.', () => {
        InsuranceExpenses.mutations.ADD_EXPENSES_INSURANCE(
          state,
          FAKE_INSURANCE_ANSWERS
        );
        expect(state.insurance).toEqual(FAKE_INSURANCE_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_FOOD', () => {
      it('should add the food expenses answers in the state.', () => {
        FoodExpenses.mutations.ADD_EXPENSES_FOOD(state, FAKE_FOOD_ANSWERS);
        expect(state.food).toEqual(FAKE_FOOD_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_LEISURE', () => {
      it('should add the leisure expenses answers in the state.', () => {
        LeisureExpenses.mutations.ADD_EXPENSES_LEISURE(
          state,
          FAKE_LEISURE_ANSWERS
        );
        expect(state.leisure).toEqual(FAKE_LEISURE_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_EDUCATION', () => {
      it('should add the education expenses answers in the state.', () => {
        EducationExpenses.mutations.ADD_EXPENSES_EDUCATION(
          state,
          FAKE_EDUCATION_ANSWERS
        );
        expect(state.education).toEqual(FAKE_EDUCATION_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_HEALTH', () => {
      it('should add the health expenses answers in the state.', () => {
        HealthExpenses.mutations.ADD_EXPENSES_HEALTH(
          state,
          FAKE_HEALTH_ANSWERS
        );
        expect(state.health).toEqual(FAKE_HEALTH_ANSWERS);
      });
    });
    describe('ADD_EXPENSES_VARIOUS', () => {
      it('should add the various expenses answers in the state.', () => {
        VariousExpenses.mutations.ADD_EXPENSES_VARIOUS(
          state,
          FAKE_VARIOUS_ANSWERS
        );
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
        await HousingExpenses.actions.addExpensesHousing(
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
        await TransportExpenses.actions.addExpensesTransport(
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
        await InsuranceExpenses.actions.addExpensesInsurance(
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
        await FoodExpenses.actions.addExpensesFood(
          { commit },
          FAKE_FOOD_ANSWERS
        );
        expect(commit).toBeCalledWith('ADD_EXPENSES_FOOD', FAKE_FOOD_ANSWERS);
      });
    });
    describe('addExpensesLeisure', () => {
      it('should call the mutation ADD_EXPENSES_LEISURE.', async () => {
        await LeisureExpenses.actions.addExpensesLeisure(
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
        await EducationExpenses.actions.addExpensesEducation(
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
        await HealthExpenses.actions.addExpensesHealth(
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
        await VariousExpenses.actions.addExpensesVarious(
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
