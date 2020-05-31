export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesHealthItems: state => {
      return state.health;
    },
    getExpensesHealthSum: (_, getters) => {
      return getters.getExpensesHealthItems.reduce(
        (acc, item) => acc + item.user + item.partner,
        0
      );
    }
  },
  mutations: {
    ADD_EXPENSES_HEALTH: (state, payload) => {
      state.health = payload;
    }
  },
  actions: {
    addExpensesHealth: ({ commit }, payload) => {
      commit('ADD_EXPENSES_HEALTH', payload);
    }
  }
};
