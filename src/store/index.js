import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authHasError: false,
    errMsg: '',
  },
  mutations: {
    authErr: (state, error) => {
      state.authHasError = true;
      state.errMsg = error;
    },
    authCorr: (state) => {
      state.authHasError = false;
      //хранить токен юзера?
    },
  },
  actions: {
  },
  modules: {
  }
})
