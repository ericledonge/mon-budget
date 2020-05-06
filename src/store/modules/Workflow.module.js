export default {
  state: {
    steps: [
      {
        id: 0,
        label: 'commons.basic-info',
        icon: 'user-circle'
      },
      {
        id: 1,
        label: 'commons.revenues',
        icon: 'money-bill-alt'
      },
      {
        id: 2,
        label: 'commons.housing',
        icon: 'home'
      },
      {
        id: 3,
        label: 'commons.transport',
        icon: 'bus'
      },
      {
        id: 4,
        label: 'commons.insurance',
        icon: 'car-crash'
      },
      {
        id: 5,
        label: 'commons.food',
        icon: 'utensils'
      },
      {
        id: 6,
        label: 'commons.leisure',
        icon: 'theater-masks'
      },
      {
        id: 7,
        label: 'commons.education',
        icon: 'graduation-cap'
      },
      {
        id: 8,
        label: 'commons.health',
        icon: 'first-aid'
      },
      {
        id: 9,
        label: 'commons.various',
        icon: 'plus'
      },
      {
        id: 10,
        label: 'summary.title',
        icon: 'chart-bar'
      }
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
    },
    INCREMENT_STEP: state => {
      state.currentStep++;
    }
  },
  actions: {
    setCurrentStep: ({ commit }, stepNumber) => {
      commit('SET_CURRENT_STEP', stepNumber);
    },
    incrementStep: ({ commit }) => {
      commit('INCREMENT_STEP');
    }
  }
};
