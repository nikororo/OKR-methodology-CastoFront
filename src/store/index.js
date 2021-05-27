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
    goals: [],
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
    setGoals: (state, goals) => {
      state.goals = goals;
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

    addMission: async ({state, dispatch}, newMission) => {
      const db = firebase.database();
      await dispatch('getMissions');
      
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

    deleteMission: ({dispatch}, idMission) => {
      let db = firebase.database();
      db.ref(`/missions/${idMission}`).set(null, (err) => { 
        if (err) throw err;
        dispatch('getMissions');
      });
    },

    getGoals: async ({ commit }) => {
      const db = firebase.database();
      try {
        await new Promise((resolve) => {
          db.ref(`/goals`).on('value', async (snap) => {
            let value = snap.val();
            let resultGoals = [];
            for (let goalId in value) {
              let goal = {};
              goal.id = goalId;

              await new Promise((resolve) => {
                db.ref(`/goals/${goal.id}`).once('value')
                  .then((snap) => {
                    let value = snap.val();
                    for (let attr in value) {
                      goal[`${attr}`] = value[attr];
                    }
                    resolve();
                  });
              });
              resultGoals.push(goal);
            }
            commit('setGoals', resultGoals);
            resolve();
          });
        });
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    addGoal: async ({state, dispatch}, newGoal) => {
      const db = firebase.database();
      await dispatch('getGoals');

      let maxID = 0;
      state.goals.forEach((goal) => {
        if (goal.id > maxID) maxID = goal.id;
      });
      maxID ++;
      
      newGoal.showKr = false;
      newGoal.krs = [];
      newGoal.status = "unsent";
      newGoal.remainderWeight = 100;
      newGoal.newKr = {
        title: "",
        weight: "",
        executor: "",
      };
      db.ref(`/goals/` + maxID).set(newGoal, (err) => {
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    approveGoal: ({state, dispatch}, idGoal) => {
      const db = firebase.database();
      let newGoal = state.goals.filter((goal) => goal.id == idGoal)[0];
      newGoal.status = "approved";
      
      db.ref(`/goals/${idGoal}`).set(newGoal, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    rejectGoal: ({state, dispatch}, idGoal) => {
      const db = firebase.database();
      let newGoal = state.goals.filter((goal) => goal.id == idGoal)[0];
      newGoal.status = "rejected";
      
      db.ref(`/goals/${idGoal}`).set(newGoal, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    sendGoal: ({state, dispatch}, idGoal) => {
      const db = firebase.database();
      let newGoal = state.goals.filter((goal) => goal.id == idGoal)[0];
      newGoal.status = "proposed";
      
      db.ref(`/goals/${idGoal}`).set(newGoal, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    displayKr: ({state, dispatch}, idGoal) => {
      const db = firebase.database();
      let newGoal = state.goals.filter((goal) => goal.id == idGoal)[0];
      newGoal.showKr = !newGoal.showKr;
      
      db.ref(`/goals/${idGoal}`).set(newGoal, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    editGoal: ({state, dispatch}, modifiedGoal) => {
      const db = firebase.database();
      let editGoal = state.goals.find((goal) => goal.id == modifiedGoal.id);
      for (const property in modifiedGoal) {
        editGoal[property] = modifiedGoal[property];
      }
      db.ref(`/goals/${editGoal.id}`).set(editGoal, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
    },

    deleteGoal: ({dispatch}, idGoal) => {
      let db = firebase.database();
      db.ref(`/goals/${idGoal}`).set(null, (err) => { 
        if (err) throw err;
        dispatch('getGoals');
      });
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
