export default {
  state: {
    revenuesItems: [
      {
        name: 'net-salaries',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'rental-revenues',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'public-benefits',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'private-benefits',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'child-benefits',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'bonuses',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'investment-income',
        user: 0,
        partner: 0,
        comments: null
      },
      {
        name: 'other-revenues',
        user: 0,
        partner: 0,
        comments: null
      }
    ]
  },
  getters: {
    getRevenuesItems: state => {
      return state.revenuesItems;
    },
    getNumberOfRevenuesItems: (_, getters) => {
      return getters.getRevenuesItems && getters.getRevenuesItems.length;
    },
    getTotalMonthlyHouseholdRevenues: (_, getters) => {
      return getters.getRevenuesItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    }
  },
  mutations: {
    ADD_REVENUES_ANSWERS: (state, payload) => {
      state.revenuesItems = payload;
    }
  },
  actions: {
    addRevenuesAnswers({ commit }, payload) {
      commit('ADD_REVENUES_ANSWERS', payload);
    }
  }
};
