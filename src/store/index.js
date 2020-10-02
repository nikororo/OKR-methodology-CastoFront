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
      command: 'Castoroides'
    },
    people: [
      'Литвинова Наталья Игоревна',
      'Черкасов Данил Владимирович',
      'Печуркина Екатерина Андреевна',
      'Чеснокова Ксения Андреевна',
      'Венберг Алексей Алексеевич',
      'Бруев Максим Олегович',
      'Титова Арина Радиевна',
    ],
    commands: [
      'Тестировщики',
      'Castoroides',
      'Академия',
      'Marketing',
      'Человек Умелый',
    ],
    goals: [
      {
        name: 'Главная цель компании',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        command: 'Castoroides',
        id: 1,
        lvl: 1,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 100,
        krs: []
      },
      {
        name: 'Цель отдела',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Виктор',
        command: 'Тераторн',
        id: 2,
        lvl: 2,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 100,
        krs: []
      },
      {
        name: 'Цель отдела 2',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Максимов Станислав Игоревич',
        command: 'Castoroides',
        executor: 'Екатерина',
        id: 3,
        lvl: 2,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 100,
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

    editGoal: (state, modifiedGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === modifiedGoal.id) {
          for (const property in modifiedGoal) {
            goal[property] = modifiedGoal[property];
          }
        }
      }); 
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
          goal.remainderWeight -= newKR.weight;

          goal.krs.push({
            title: newKR.title,
            weight: newKR.weight,
            executor: newKR.executor,
            performers: [],
            percent: 0,
            id: maxID,
          });
        }
      });
    },

    editKr: (state, modifiedKr) => {
      state.goals.forEach((goal) => {
        if (goal.id === modifiedKr.idGoal) {
          goal.krs.forEach((kr) => {
            if (kr.id === modifiedKr.id) {
              if (kr.weight !== modifiedKr.weight) {
                goal.remainderWeight += kr.weight - modifiedKr.weight;
              }

              delete modifiedKr.idGoal;
              for (const property in modifiedKr) {
                kr[property] = modifiedKr[property];
              }
            }
          });
        }
      }); 
    },

    deleteKr: (state, {idGoal, idKr}) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.krs.forEach((kr, i) => {
            if (kr.id === idKr) {
              goal.remainderWeight += Number(kr.weight);
              goal.krs.splice(i, 1);
            }
          });
        }
      });
    },

    setPercentOfCompletion: (state, payload) => {
      state.goals.forEach((goal) => {
        if (goal.id === payload.id) {
          goal.percentOfCompletion = payload.percent.toFixed()
        }
      })
    }
  },
  plugins: [createPersistedState()],
    actions: {
      sumPercent: ({commit, state}, id) => {
        state.goals.forEach((goal) => {
          if (goal.id === id) {
            let percentOfCompletion = 0;
            goal.krs.forEach((kr) => {
              let weightKr = kr.weight / 100;
              let percentKr = kr.percent;
              percentOfCompletion = weightKr * percentKr + percentOfCompletion;
            })
            let payload = {
              id,
              percent: percentOfCompletion
            }
            commit('setPercentOfCompletion', payload)
          }
        })
      }
    },
  modules: {
  }
})