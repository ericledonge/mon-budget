export default {
  state: {
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
    ADD_EXPENSES_VARIOUS: (state, payload) => {
      state.various = payload;
    }
  },
  actions: {
    addExpensesVarious: ({ commit }, payload) => {
      commit('ADD_EXPENSES_VARIOUS', payload);
    }
  }
};
