const loadingStore = {
  namespaced: true,
  state: {
    loadingStatus: false,
  },
  getters: {
    GET_LOADING_STATUS: state => state.loadingStatus,
  },
  mutations: {
    SET_LOADING_STATUS: (state, payload) => {
      state.loadingStatus = payload.loadingStatus;
    },
  },
};

export default loadingStore;
