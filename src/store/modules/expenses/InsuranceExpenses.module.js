export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesInsuranceItems: state => {
      return state.insurance;
    },
    getExpensesInsuranceSum: (_, getters) => {
      return getters.getExpensesInsuranceItems.reduce(
        (acc, item) => acc + item.user + item.partner,
        0
      );
    }
  },
  mutations: {
    ADD_EXPENSES_INSURANCE: (state, payload) => {
      state.insurance = payload;
    }
  },
  actions: {
    addExpensesInsurance: ({ commit }, payload) => {
      commit('ADD_EXPENSES_INSURANCE', payload);
    }
  }
};
