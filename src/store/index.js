import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authHasError: false,
    errMsg: '',
    urlBD: 'http://127.0.0.1:8000/'
  },
  mutations: {
    authErr: (state, error) => {
      state.authHasError = true;
      state.errMsg = error;
    },
    authCorr: (state) => {
      state.authHasError = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
