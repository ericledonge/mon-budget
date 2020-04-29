import Workflow from '@/store/modules/Workflow.module';
import { FAKE_STEPS } from '../../mocks/mockData.js';

let state;
let commit;

describe('Workflow Module', () => {
  beforeEach(() => {
    state = {
      steps: FAKE_STEPS,
      currentStep: 0
    };
  });

  describe('Getters', () => {
    describe('getAllSteps', () => {
      it('should return the list of all the steps', () => {
        const actual = Workflow.getters.getAllSteps(state);
        expect(actual).toEqual(FAKE_STEPS);
      });
    });
    describe('getCurrentStep', () => {
      it('should return the current step.', () => {
        const actual = Workflow.getters.getCurrentStep(state);
        expect(actual).toEqual(0);
      });
    });
  });

  describe('Mutations', () => {
    describe('SET_CURRENT_STEP', () => {
      it('should set the current step.', () => {
        const stepNumber = 1;
        Workflow.mutations.SET_CURRENT_STEP(state, stepNumber);
        const actual = Workflow.getters.getCurrentStep(state);
        expect(actual).toEqual(stepNumber);
      });
    });
  });

  describe('Actions', () => {
    describe('setCurrentStep', () => {
      it('should set the current step.', async () => {
        let stepNumber = 2;
        commit = jest.fn();
        await Workflow.actions.setCurrentStep({ commit }, stepNumber);
        expect(commit).toHaveBeenCalledWith('SET_CURRENT_STEP', stepNumber);
      });
    });
  });
});
