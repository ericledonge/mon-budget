import Workflow from '@/store/modules/Workflow.module';
import { FAKE_STEPS } from '../../mocks/mockData.js';
import cloneDeep from 'lodash.clonedeep';

let state;
let commit;

const initialState = {
  steps: FAKE_STEPS
};

const stateFactory = initialState => {
  return (state = cloneDeep(initialState));
};

describe('Workflow Module', () => {
  describe('Getters', () => {
    describe('getAllSteps', () => {
      it('should return the list of all the steps', () => {
        state = stateFactory(initialState);
        const actual = Workflow.getters.getAllSteps(state);
        expect(actual).toEqual(FAKE_STEPS);
      });
    });
    describe('getActiveStep', () => {
      it('should return the active step', () => {
        state = stateFactory(initialState);
        const activeStep = Workflow.getters.getActiveStep(state);
        expect(activeStep.item).toEqual('transport');
      });
    });
    describe('getNextStepLink', () => {
      it('should return next step link', () => {
        state = stateFactory(initialState);
        let getActiveStep = state.steps.find(step => step.active);
        const nextStepLink = Workflow.getters.getNextStepLink(state, {
          getActiveStep
        });
        expect(nextStepLink).toEqual('/expenses/insurance');
      });
      describe('When there is no next step', () => {
        it('should return an empty string', () => {
          state = stateFactory(initialState);
          Workflow.mutations.SET_ACTIVE_STEP(state, 'insurance');
          let getActiveStep = state.steps.find(step => step.active);
          const nextStepLink = Workflow.getters.getNextStepLink(state, {
            getActiveStep
          });
          expect(nextStepLink).toEqual('');
        });
      });
    });
    describe('getStepById', () => {
      it('should return the corresponding step', () => {
        state = stateFactory(initialState);
        let step = Workflow.getters.getStepById(state)(FAKE_STEPS[2].id);
        expect(step.id).toEqual(FAKE_STEPS[2].id);
      });
    });
  });

  describe('Mutations', () => {
    describe('SET_ACTIVE_STEP', () => {
      it('should set the active step', () => {
        state = stateFactory(initialState);
        Workflow.mutations.SET_ACTIVE_STEP(state, 'insurance');
        const activeStepActiveItem = state.steps.find(step => step.active).item;
        expect(activeStepActiveItem).toEqual('insurance');
      });
      it('should exist only one unique active step', () => {
        state = stateFactory(initialState);
        Workflow.mutations.SET_ACTIVE_STEP(state, 'insurance');
        const activeStepsActiveNumber = state.steps.filter(step => step.active);
        expect(activeStepsActiveNumber.length).toEqual(1);
      });
    });
  });

  describe('Actions', () => {
    describe('setActiveStep', () => {
      it('should set the active step', async () => {
        state = stateFactory(initialState);
        commit = jest.fn();
        await Workflow.actions.setActiveStep({ commit }, 'insurance');
        expect(commit).toBeCalledWith('SET_ACTIVE_STEP', 'insurance');
      });
    });
  });
});
