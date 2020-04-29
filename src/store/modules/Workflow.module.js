export default {
  state: {
    steps: [
      {
        label: 'analyze.first-step-basic-info',
        icon: 'user-circle'
      },
      {
        label: 'revenues.second-step-revenues',
        icon: 'money-bill-alt'
      },
      { label: 'summary.title', icon: 'chart-bar' }
    ],
    currentStep: 0
  },
  getters: {
    getAllSteps: state => {
      return state.steps;
    },
    getCurrentStep: state => {
      return state.currentStep;
    }
  },
  mutations: {
    SET_CURRENT_STEP: (state, stepNumber) => {
      state.currentStep = stepNumber;
    }
  },
  actions: {
    setCurrentStep: ({ commit }, stepNumber) => {
      commit('SET_CURRENT_STEP', stepNumber);
    }
  }
};
