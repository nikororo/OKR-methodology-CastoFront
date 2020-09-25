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
    },
    goals: [
      {
        name: 'Главная цель компании',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        id: 1,
        lvl: 1,
        percentOfCompletion: 0,
        krs: []
      },
      {
        name: 'Цель отдела',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        id: 2,
        lvl: 2,
        percentOfCompletion: 0
      },
      {
        name: 'Цель отдела 2',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        id: 3,
        lvl: 2,
        percentOfCompletion: 0
      }
    ]
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
    },

    addGoal: (state, newGoal) => {
      newGoal.id = state.goals.length + 1;
      newGoal.lvl = 2;
      state.goals.push(newGoal);
    },

    deleteGoal: (state, idGoal) => {
      let placeGoal;
      state.goals.map(function(item, i) {
        if (item.id === idGoal) {
          placeGoal=i;
        }
      });
      state.goals.splice(placeGoal, 1);
    },

    createKr: (state, newKR) => {
      state.goals.map(function(item) {
        if (item.id === newKR.goalId) {
          item.krs.push({
            title: newKR.title,
            weight: newKR.weight,
            percent: 0
          });
        }
      });
    }

  },
  plugins: [createPersistedState()],
  actions: {
  },
  modules: {
  }
})
