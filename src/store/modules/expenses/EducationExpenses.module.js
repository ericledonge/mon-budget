export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesEducationItems: state => {
      return state.education;
    },
    getExpensesEducationSum: (_, getters) => {
      return getters.getExpensesEducationItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    }
  },
  mutations: {
    ADD_EXPENSES_EDUCATION: (state, payload) => {
      state.education = payload;
    }
  },
  actions: {
    addExpensesEducation: ({ commit }, payload) => {
      commit('ADD_EXPENSES_EDUCATION', payload);
    }
  }
};
