import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authHasError: false,
    urlBD: 'http://127.0.0.1:8000/',
    user: {
      name: 'Максимов Станислав Игоревич',
    }
  },
  mutations: {
    authErr: (state) => {
      state.authHasError = true;
    },
    authCorr: (state, user) => {
      state.user = user;
      state.authHasError = false;
    },
    logOut: (state) => {
      state.user = {};
    }
  },
  plugins: [createPersistedState()],
  actions: {
  },
  modules: {
  }
})
