import store from '@/store/index';

function progressCircleSwitch(onOff) {
  store.commit('loadingStore/SET_LOADING_STATUS', {
    loadingStatus: onOff,
  });
}

function setInterceptors(instance, needToken) {
  instance.interceptors.request.use(
    function (config) {
      progressCircleSwitch(true);
      if (needToken) {
        config.headers.Authorization = store.state.userStore.token;
      }
      return config;
    },
    function (error) {
      progressCircleSwitch(false);
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      progressCircleSwitch(false);
      return response;
    },
    function (error) {
      progressCircleSwitch(false);
      return Promise.reject(error);
    },
  );

  return instance;
}

export { setInterceptors };
