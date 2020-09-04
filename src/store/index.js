import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

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
    },
  },
  actions: {
  },
  modules: {
  }
})
