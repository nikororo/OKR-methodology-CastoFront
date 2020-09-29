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
        showKr: false,
        krs: []
      },
      {
        name: 'Цель отдела',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        id: 2,
        lvl: 2,
        percentOfCompletion: 0,
        showKr: false,
        krs: []
      },
      {
        name: 'Цель отдела 2',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        id: 3,
        lvl: 2,
        percentOfCompletion: 0,
        showKr: false,
        krs: []
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
      let maxID = 0;
      state.goals.forEach((goal) => {
        if (goal.id > maxID) maxID = goal.id;
      }) 
      newGoal.id = maxID + 1;
      newGoal.lvl = 2;
      newGoal.showKr = false;
      newGoal.krs = [];
      state.goals.push(newGoal);
    },

    deleteGoal: (state, idGoal) => {
      state.goals.forEach((goal, i) => {
        if (goal.id === idGoal) state.goals.splice(i, 1);
      });
    },

    displayKr: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.showKr = !goal.showKr;
        }
      });
    },

    createKr: (state, newKR) => {
      state.goals.forEach((goal) => {
        if (goal.id === newKR.goalId) {
          let maxID = 0;
          if (goal.krs.length > 0) {
            goal.krs.forEach((kr) => {
              if (kr.id > maxID) maxID = kr.id;
            });
          }
          maxID ++;

          goal.krs.push({
            title: newKR.title,
            weight: newKR.weight,
            percent: 0,
            id: maxID,
          });
        }
      });
    },

    deleteKr: (state, {idGoal, idKr}) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.krs.forEach((kr, i) => {
            if (kr.id === idKr) {
              goal.krs.splice(i, 1);
            }
          });
        }
      });
    },

    setPercentOfCompletion: (state, payload) => {
      state.goals.forEach((goal) => {
        if (goal.id === payload.id) {
          goal.percentOfCompletion = payload.percent.toFixed(2)
        }
      })
    }
  },
  plugins: [createPersistedState()],
    actions: {
      sumPercent: ({commit, state}, data) => {
        state.goals.forEach((goal) => {
          if (goal.id === data.id) {
            let percentOfCompletion = 0;
            goal.krs.forEach((kr) => {
              let weightKr = kr.weight / 100;
              let percentKr = kr.percent;
              percentOfCompletion = weightKr * percentKr + percentOfCompletion;
              let payload = {
                id: data.id,
                percent: percentOfCompletion
              }
              commit('setPercentOfCompletion', payload)
            })
          }
        })
      }
    },
  modules: {
  }
})