const userStore = {
  namespaced: true,
  state: {
    username: '',
    token: '',
  },
  getters: {
    IS_LOGINED: state => (state.token == '' ? false : true),
  },
  mutations: {
    SET_USER_INFO: (state, payload) => {
      state.username = payload.username;
      state.token = 'abc';
    },
    DELETE_TOKEN: state => {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('SET_USER_INFO', payload);
          resolve(true);
        }, 3000);
      });
    },
    async LOGOUT({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('DELETE_TOKEN');
          resolve(true);
        }, 3000);
      });
    },
  },
};

export default userStore;
