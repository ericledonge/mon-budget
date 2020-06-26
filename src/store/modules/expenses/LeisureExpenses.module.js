export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesLeisureItems: state => {
      return state.leisure;
    },
    getExpensesLeisureSum: (_, getters) => {
      return getters.getExpensesLeisureItems.reduce(
        (acc, item) => acc + item.user + item.partner,
        0
      );
    }
  },
  mutations: {
    ADD_EXPENSES_LEISURE: (state, payload) => {
      state.leisure = payload;
    }
  },
  actions: {
    addExpensesLeisure: ({ commit }, payload) => {
      commit('ADD_EXPENSES_LEISURE', payload);
    }
  }
};
