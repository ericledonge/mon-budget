export default {
  state: {
    name: null,
    maritalStatus: null,
    hasKids: false,
    numberOfKids: 0
  },
  getters: {
    username: state => {
      return state.name;
    },
    maritalStatus: state => {
      return state.maritalStatus;
    },
    hasKids: state => {
      return state.hasKids;
    },
    numberOfKids: state => {
      return state.numberOfKids;
    },
    basicInfo: state => {
      return state;
    }
  },
  mutations: {
    ADD_BASIC_INFO: (state, payload) => {
      state.name = payload.name;
      state.maritalStatus = payload.maritalStatus;
      state.hasKids = payload.hasKids;
      state.numberOfKids = payload.numberOfKids;
    }
  },
  actions: {
    addBasicInfo({ commit }, payload) {
      commit('ADD_BASIC_INFO', payload);
    }
  }
};
