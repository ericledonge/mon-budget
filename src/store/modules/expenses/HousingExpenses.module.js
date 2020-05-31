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
    ]
  },
  getters: {
    getExpensesHousingItems: state => {
      return state.housing;
    },
    getExpensesHousingSum: (_, getters) => {
      return getters.getExpensesHousingItems.reduce(
        (acc, item) => acc + item.user + item.partner,
        0
      );
    }
  },
  mutations: {
    ADD_EXPENSES_HOUSING: (state, payload) => {
      state.housing = payload;
    }
  },
  actions: {
    addExpensesHousing: ({ commit }, payload) => {
      commit('ADD_EXPENSES_HOUSING', payload);
    }
  }
};
