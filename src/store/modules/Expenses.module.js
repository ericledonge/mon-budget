export default {
  state: {
    housing: [
      {
        name: 'rent-mortgage',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'electricity-heating',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'telephone-cable-internet',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'cell',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'municipal-school-taxes',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'condominium-fees',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'furniture-accessories-tools',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'other-housing-expenses',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    transport: [
      {
        name: 'car-public-transport',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'gasoline',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'car-insurance',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'registration',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'driver-license',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'car-rental-parking',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'other-transport-expenses',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'other car or recreational vehicle program',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'maintenance-and-repairs',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    insurance: [
      {
        name: 'life-insurance',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'child-life-insurance',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'invalidity-insurance',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'critical-illness-insurance',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    food: [
      {
        name: 'grocery',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'restaurants',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'alcohol',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    leisure: [
      {
        name: 'cultural-activities',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'sports-activities',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'newspapers-magazines-music-movies',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'toys-films-game-rentals',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'lotteries',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'travels',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    education: [
      {
        name: 'courses-training',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'professional-association',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'educational-outings',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    health: [
      {
        name: 'hairdresser',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'esthetician',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'pharmacy',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'shoemaking-sewing',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'psychologist',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'dentist-optometrist-others',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'clothing',
        user: 0,
        partner: 0,
        comments: null
      }
    ],
    various: [
      {
        name: 'gifts',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'pets',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'tabacco',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'children-pocket-money',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'bank-fees',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'tax-report-lawyer-notary',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'alimony',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'childcare-fees',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'other-expenses',
        user: 0,
        partner: 0,
        comments: null
      }
    ]
  },
  getters: {
    getExpensesHousingItems: state => {
      return state.housing;
    },
    getExpensesHousingSum: (_, getters) => {
      return getters.getExpensesHousingItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesTransportItems: state => {
      return state.transport;
    },
    getExpensesTransportSum: (_, getters) => {
      return getters.getExpensesTransportItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesInsuranceItems: state => {
      return state.insurance;
    },
    getExpensesInsuranceSum: (_, getters) => {
      return getters.getExpensesInsuranceItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesFoodItems: state => {
      return state.food;
    },
    getExpensesFoodSum: (_, getters) => {
      return getters.getExpensesFoodItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesLeisureItems: state => {
      return state.leisure;
    },
    getExpensesLeisureSum: (_, getters) => {
      return getters.getExpensesLeisureItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesEducationItems: state => {
      return state.education;
    },
    getExpensesEducationSum: (_, getters) => {
      return getters.getExpensesEducationItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesHealthItems: state => {
      return state.health;
    },
    getExpensesHealthSum: (_, getters) => {
      return getters.getExpensesHealthItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    },
    getExpensesVariousItems: state => {
      return state.various;
    },
    getExpensesVariousSum: (_, getters) => {
      return getters.getExpensesVariousItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    }
  },
  mutations: {
    ADD_EXPENSES_HOUSING: (state, payload) => {
      state.housing = payload;
    },
    ADD_EXPENSES_TRANSPORT: (state, payload) => {
      state.transport = payload;
    },
    ADD_EXPENSES_INSURANCE: (state, payload) => {
      state.insurance = payload;
    },
    ADD_EXPENSES_FOOD: (state, payload) => {
      state.food = payload;
    },
    ADD_EXPENSES_LEISURE: (state, payload) => {
      state.leisure = payload;
    },
    ADD_EXPENSES_EDUCATION: (state, payload) => {
      state.education = payload;
    },
    ADD_EXPENSES_HEALTH: (state, payload) => {
      state.health = payload;
    },
    ADD_EXPENSES_VARIOUS: (state, payload) => {
      state.various = payload;
    }
  },
  actions: {
    addExpensesHousing: ({ commit }, payload) => {
      commit('ADD_EXPENSES_HOUSING', payload);
    },
    addExpensesTransport: ({ commit }, payload) => {
      commit('ADD_EXPENSES_TRANSPORT', payload);
    },
    addExpensesInsurance: ({ commit }, payload) => {
      commit('ADD_EXPENSES_INSURANCE', payload);
    },
    addExpensesFood: ({ commit }, payload) => {
      commit('ADD_EXPENSES_FOOD', payload);
    },
    addExpensesLeisure: ({ commit }, payload) => {
      commit('ADD_EXPENSES_LEISURE', payload);
    },
    addExpensesEducation: ({ commit }, payload) => {
      commit('ADD_EXPENSES_EDUCATION', payload);
    },
    addExpensesHealth: ({ commit }, payload) => {
      commit('ADD_EXPENSES_HEALTH', payload);
    },
    addExpensesVarious: ({ commit }, payload) => {
      commit('ADD_EXPENSES_VARIOUS', payload);
    }
  }
};
