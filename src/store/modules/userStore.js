const userStore = {
  namespaced: true,
  state: {
    userInfo: {},
  },
  getters: {
    GET_USER_INFO: state => state.userInfo,
  },
  mutations: {
    SET_USER_INFO: (state, payload) => {
      state.userInfo = payload;
    },
  },
  actions: {
    async LOGIN({ commit }, payload) {
      commit('SET_USER_INFO', payload);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(false);
        }, 3000);
      });
    },
  },
};

export default userStore;
