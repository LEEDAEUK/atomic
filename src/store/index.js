import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

Vue.use(Vuex);

import loadingStore from './modules/loadingStore.js';
import userStore from './modules/userStore.js';

const store = new Vuex.Store({
  modules: {
    loadingStore: loadingStore,
    userStore: userStore,
  },
  plugins: [
    createPersistedState({
      paths: ['userStore.token'],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, {
            expires: new Date(new Date().getTime() + 1 * 60 * 1000),
            secure: true,
          }),
        removeItem: key => Cookies.remove(key),
      },
    }),
  ],
});

export default store;
