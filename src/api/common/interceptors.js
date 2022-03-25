import store from '@/store/index';

export function setInterceptors(instance, needToken) {
  instance.interceptors.request.use(
    function (config) {
      store.commit('loadingStore/SET_LOADING_STATUS', {
        loadingStatus: true,
      });
      if (needToken) {
        config.headers.Authorization = store.state.userStore.token;
      }
      return config;
    },
    function (error) {
      store.commit('loadingStore/SET_LOADING_STATUS', {
        loadingStatus: false,
      });
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      store.commit('loadingStore/SET_LOADING_STATUS', {
        loadingStatus: false,
      });
      return response;
    },
    function (error) {
      store.commit('loadingStore/SET_LOADING_STATUS', {
        loadingStatus: false,
      });
      return Promise.reject(error);
    },
  );

  return instance;
}
