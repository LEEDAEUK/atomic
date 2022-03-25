import { loginUser } from '@/api/auth';

const userStore = {
  namespaced: true,
  state: {
    email: '',
    token: '',
  },
  getters: {
    IS_LOGINED: state => (state.token == '' ? false : true),
  },
  mutations: {
    SET_USER_INFO: (state, payload) => {
      console.log(payload);
      state.email = payload.email;
      state.token = payload.token;
    },
    LOGOUT: state => {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      console.log(userData);
      const { data } = await loginUser(userData);
      console.log(data);
      let commitData = {
        email: userData.email,
        token: data.token,
      };
      commit('SET_USER_INFO', commitData);
      return data;
    },
  },
};

export default userStore;
