import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authHasError: false,
    errMsg: '',
    urlBD: 'http://127.0.0.1:8000/',
    user: {
      name: 'Ешь, пей, жуй - Буржуй',
      email: ''
    }
  },
  mutations: {
    authErr: (state, error) => {
      state.authHasError = true;
      state.errMsg = error;
    },
    authCorr: (state, user) => {
      state.user = user;
      state.authHasError = false;
      console.log(state.user)
    },
  },
  actions: {
  },
  modules: {
  }
})
