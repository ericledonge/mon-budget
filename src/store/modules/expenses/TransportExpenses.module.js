export default {
  state: {
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
    ]
  },
  getters: {
    getExpensesTransportItems: state => {
      return state.transport;
    },
    getExpensesTransportSum: (_, getters) => {
      return getters.getExpensesTransportItems.reduce(function(acc, item) {
        return acc + item.user + item.partner;
      }, 0);
    }
  },
  mutations: {
    ADD_EXPENSES_TRANSPORT: (state, payload) => {
      state.transport = payload;
    }
  },
  actions: {
    addExpensesTransport: ({ commit }, payload) => {
      commit('ADD_EXPENSES_TRANSPORT', payload);
    }
  }
};
