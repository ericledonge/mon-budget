export default {
  state: {
    steps: [
      {
        id: 0,
        active: true,
        item: 'basic-info',
        label: 'commons.basic-info',
        icon: 'user-circle',
        link: '/basic-info'
      },
      {
        id: 1,
        active: false,
        item: 'revenues',
        label: 'commons.revenues',
        icon: 'money-bill-alt',
        link: '/revenues'
      },
      {
        id: 2,
        active: false,
        item: 'housing',
        label: 'commons.housing',
        icon: 'home',
        subItemsGetter: 'getExpensesHousingItems',
        updateAction: 'addExpensesHousing',
        link: '/expenses/housing'
      },
      {
        id: 3,
        active: false,
        item: 'transport',
        label: 'commons.transport',
        icon: 'bus',
        subItemsGetter: 'getExpensesTransportItems',
        updateAction: 'addExpensesTransport',
        link: '/expenses/transport'
      },
      {
        id: 4,
        active: false,
        item: 'insurance',
        label: 'commons.insurance',
        icon: 'car-crash',
        subItemsGetter: 'getExpensesInsuranceItems',
        updateAction: 'addExpensesInsurance',
        link: '/expenses/insurance'
      },
      {
        id: 5,
        active: false,
        item: 'food',
        label: 'commons.food',
        icon: 'utensils',
        subItemsGetter: 'getExpensesFoodItems',
        updateAction: 'addExpensesFood',
        link: '/expenses/food'
      },
      {
        id: 6,
        active: false,
        item: 'leisure',
        label: 'commons.leisure',
        icon: 'theater-masks',
        subItemsGetter: 'getExpensesLeisureItems',
        updateAction: 'addExpensesLeisure',
        link: '/expenses/leisure'
      },
      {
        id: 7,
        active: false,
        item: 'education',
        label: 'commons.education',
        icon: 'graduation-cap',
        subItemsGetter: 'getExpensesEducationItems',
        updateAction: 'addExpensesEducation',
        link: '/expenses/education'
      },
      {
        id: 8,
        active: false,
        item: 'health',
        label: 'commons.health',
        icon: 'first-aid',
        subItemsGetter: 'getExpensesHealthItems',
        updateAction: 'addExpensesHealth',
        link: '/expenses/health'
      },
      {
        id: 9,
        active: false,
        item: 'various',
        label: 'commons.various',
        icon: 'plus',
        subItemsGetter: 'getExpensesVariousItems',
        updateAction: 'addExpensesVarious',
        link: '/expenses/various'
      },
      {
        id: 10,
        active: false,
        item: 'summary',
        label: 'summary.title',
        icon: 'chart-bar',
        link: '/summary'
      }
    ]
  },
  getters: {
    getAllSteps: state => {
      return state.steps;
    },
    getActiveStep: state => {
      return state.steps.find(step => step.active);
    },
    getNextStepLink: (state, getters) => {
      const nextStep = state.steps.find(
        step => step.id === getters.getActiveStep.id + 1
      );
      return nextStep ? nextStep.link : '';
    },
    getStepById: state => id => {
      return state.steps.find(step => step.id === id);
    }
  },
  mutations: {
    SET_ACTIVE_STEP: (state, activeStepItem) => {
      state.steps = state.steps.map(step => ({
        ...step,
        active: step.item === activeStepItem
      }));
    }
  },
  actions: {
    setActiveStep: ({ commit }, activeStepItem) => {
      commit('SET_ACTIVE_STEP', activeStepItem);
    }
  }
};
