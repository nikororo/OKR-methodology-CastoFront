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
        name: 'Цель 1',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        command: 'Castoroides',
        id: 1,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 0,
        krs: [
          {
            title: "кр цели 1", 
            weight: "20", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          },
          {
            title: "кр цели 1 второй", 
            weight: "50", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 3
          },
          {
            title: "кр цели 1 еще один", 
            weight: "30", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 4
          }
        ],
        status: 'approved',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
      {
        name: 'Цель отдела',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Виктор',
        command: 'Тераторн',
        id: 2,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 0,
        krs: [
          {
            title: "кр цели 2", 
            weight: "100", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          }
        ],
        status: 'approved',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
      {
        name: 'Цель отдела 2',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Максимов Станислав Игоревич',
        command: 'Castoroides',
        executor: 'Екатерина',
        id: 3,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 0,
        krs: [
          {
            title: "кр цели 3", 
            weight: "60", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          },
          {
            title: "кр цели 3 второй", 
            weight: "40", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 2
          }
        ],
        status: 'approved',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
      {
        name: 'Цель для одобрения 1',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        command: 'Castoroides',
        id: 4,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 0,
        krs: [
          {
            title: "кр цели для одобрения", 
            weight: "100", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          }
        ],
        status: 'proposed',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
      {
        name: 'новая цель',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        command: 'Castoroides',
        id: 5,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 70,
        krs: [
          {
            title: "кр цели отдела", 
            weight: "30", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          }
        ],
        status: 'unsent',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
      {
        name: 'цель, которую отклонили',
        dateStart: '2020-09-25',
        dateEnd: '2020-09-29',
        author: 'Екатерина',
        command: 'Castoroides',
        id: 6,
        percentOfCompletion: 0,
        showKr: false,
        remainderWeight: 0,
        krs: [
          {
            title: "кр цели отдела", 
            weight: "100", 
            executor: "Титова Арина Радиевна", 
            performers: [], 
            percent: 0, 
            id: 1
          }
        ],
        status: 'rejected',
        newKr: {
          title: '',
          weight: '',
          executor: '',
        }
      },
    ],
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
      newGoal.showKr = false;
      newGoal.krs = [];
      newGoal.status = 'unsent';
      newGoal.remainderWeight = 100;
      newGoal.newKr = {
        title: '',
        weight: '',
        executor: '',
      }
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

    approveGoal: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.status = 'approved';
        }
      });
    },

    rejectGoal: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.status = 'rejected';
        }
      });
    },
    
    sendGoal: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.status = 'proposed';
        }
      });
    },

    displayKr: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.showKr = !goal.showKr;
        }
      });
    },

    createKr: (state, goalId) => {
      state.goals.forEach((goal) => {
        if (goal.id === goalId) {
          let maxID = 0;
          if (goal.krs.length > 0) {
            goal.krs.forEach((kr) => {
              if (kr.id > maxID) maxID = kr.id;
            });
          }
          maxID ++;
          goal.remainderWeight -= goal.newKr.weight;

          goal.krs.push({
            title: goal.newKr.title,
            weight: goal.newKr.weight,
            executor: goal.newKr.executor,
            performers: [],
            percent: 0,
            id: maxID,
          });

          goal.newKr = {
            title: '',
            weight: '',
            executor: '',
          }
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