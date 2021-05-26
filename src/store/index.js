import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authHasError: true,
    user: null,
    missions: [],
    people: [
      "Литвинова Наталья Игоревна",
      "Черкасов Данил Владимирович",
      "Печуркина Екатерина Андреевна",
      "Чеснокова Ксения Андреевна",
      "Венберг Алексей Алексеевич",
      "Бруев Максим Олегович",
      "Титова Арина Радиевна",
    ],
    commands: [
      "Тестировщики",
      "Castoroides",
      "Академия",
      "Marketing",
      "Человек Умелый",
    ],
    goals: [
      {
        name: "Цель 1",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Екатерина",
        command: "Castoroides",
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
            id: 1,
          },
          {
            title: "кр цели 1 второй",
            weight: "50",
            executor: "Титова Арина Радиевна",
            performers: [],
            percent: 0,
            id: 3,
          },
          {
            title: "кр цели 1 еще один",
            weight: "30",
            executor: "Титова Арина Радиевна",
            performers: [],
            percent: 0,
            id: 4,
          },
        ],
        status: "approved",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
      {
        name: "Цель отдела",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Виктор",
        command: "Тераторн",
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
            id: 1,
          },
        ],
        status: "approved",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
      {
        name: "Цель отдела 2",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Максимов Станислав Игоревич",
        command: "Castoroides",
        executor: "Екатерина",
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
            id: 1,
          },
          {
            title: "кр цели 3 второй",
            weight: "40",
            executor: "Титова Арина Радиевна",
            performers: [],
            percent: 0,
            id: 2,
          },
        ],
        status: "approved",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
      {
        name: "Цель для одобрения 1",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Екатерина",
        command: "Castoroides",
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
            id: 1,
          },
        ],
        status: "proposed",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
      {
        name: "новая цель",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Екатерина",
        command: "Castoroides",
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
            id: 1,
          },
        ],
        status: "unsent",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
      {
        name: "цель, которую отклонили",
        dateStart: "2020-09-25",
        dateEnd: "2020-09-29",
        author: "Екатерина",
        command: "Castoroides",
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
            id: 1,
          },
        ],
        status: "rejected",
        newKr: {
          title: "",
          weight: "",
          executor: "",
        },
      },
    ],
  },
  mutations: {
    logOut: (state) => {
      state.user = {};
      state.authHasError = false;
    },
    setUser: (state, user) => {
      state.user = user;
      state.authHasError = false;
    },
    setMissions: (state, missions) => {
      state.missions = missions;
    },

    addGoal: (state, newGoal) => {
      let maxID = 0;
      state.goals.forEach((goal) => {
        if (goal.id > maxID) maxID = goal.id;
      });
      newGoal.id = maxID + 1;
      newGoal.showKr = false;
      newGoal.krs = [];
      newGoal.status = "unsent";
      newGoal.remainderWeight = 100;
      newGoal.newKr = {
        title: "",
        weight: "",
        executor: "",
      };
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
          goal.status = "approved";
        }
      });
    },

    rejectGoal: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.status = "rejected";
        }
      });
    },

    sendGoal: (state, idGoal) => {
      state.goals.forEach((goal) => {
        if (goal.id === idGoal) {
          goal.status = "proposed";
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
          maxID++;
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
            title: "",
            weight: "",
            executor: "",
          };
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

    deleteKr: (state, { idGoal, idKr }) => {
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
          goal.percentOfCompletion = payload.percent.toFixed();
        }
      });
    },
    percentFromColors: (state, id) => {
      state.goals.forEach((goal) => {
        if (goal.id === id) {
          let PercGoal = goal.percentOfCompletion;
          switch (PercGoal) {
            case PercGoal <= 30:
              return "red";
            case PercGoal >= 30 && PercGoal <= 70:
              return "black";
            case PercGoal >= 70:
              return "blue";
            default:
              return "blue";
          }
        }
      });
    },
  },
  plugins: [createPersistedState()],
  actions: {
    logCorr: async ({ state }, resUser) => {
      const db = firebase.database();
      state.authHasError = false;

      try {
        await new Promise((resolve) => {
          db.ref(`/${resUser.id}`).on("value", (snap) => {
            let value = snap.val();
            state.user = Object.assign(resUser, value);
            resolve();
          });
        });
      } catch (err) {
        state.authHasError = true;
        throw err;
      }
    },

    regCorr: async ({ state, commit }, resUser) => {
      const db = firebase.database();
      try {
        await new Promise((resolve) => {
          db.ref(`/${resUser.id}`).set(
            {
              command: resUser.command,
              name: resUser.name,
            },
            (err) => {
              if (err) throw err;
              
              commit('setUser', resUser);
              resolve();
            }
          );
        });
      } catch (err) {
        state.authHasError = true;
        throw err;
      }
    },

    getMissions: async ({ commit }) => {
      const db = firebase.database();
      try {
        await new Promise((resolve) => {
          db.ref(`/missions`).on('value', async (snap) => {
            let value = snap.val();
            let resultMissions = [];
            for (let missionId in value) {
              let mission = {};
              mission.id = missionId;

              await new Promise((resolve) => {
                db.ref(`/missions/${mission.id}`).once('value')
                  .then((snap) => {
                    let value = snap.val();
                    for (let attr in value) {
                      mission[`${attr}`] = value[attr];
                    }
                    resolve();
                  });
              });
              resultMissions.push(mission);
            }
            commit('setMissions', resultMissions);
            resolve();
          });
        });
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    addMission: ({state, dispatch}, newMission) => {
      const db = firebase.database();
      let maxID = 0;
      state.missions.forEach((mission) => {
        if (mission.id > maxID) maxID = mission.id;
      });
      maxID ++;
      
      db.ref(`/missions/` + maxID).set(newMission, (err) => {
        if (err) throw err;
        dispatch('getMissions');
      });
    },

    deleteMission: async ({dispatch}, idMission) => {
      let db = firebase.database();
      await db.ref(`/missions/${idMission}`).set(null, (err) =>
      { if (err) throw err; });
      
      dispatch('getMissions');
    },

    sumPercent: ({ commit, state }, id) => {
      state.goals.forEach((goal) => {
        if (goal.id === id) {
          let percentOfCompletion = 0;
          goal.krs.forEach((kr) => {
            let weightKr = kr.weight / 100;
            let percentKr = kr.percent;
            percentOfCompletion = weightKr * percentKr + percentOfCompletion;
          });
          let payload = {
            id,
            percent: percentOfCompletion,
          };
          commit("setPercentOfCompletion", payload);
        }
      });
    },
  },
});
