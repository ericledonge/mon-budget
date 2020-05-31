export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesFoodItems: state => {
      return state.food;
    },
    getExpensesFoodSum: (_, getters) => {
      return getters.getExpensesFoodItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    }
  },
  mutations: {
    ADD_EXPENSES_FOOD: (state, payload) => {
      state.food = payload;
    }
  },
  actions: {
    addExpensesFood: ({ commit }, payload) => {
      commit('ADD_EXPENSES_FOOD', payload);
    }
  }
};
