import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authHasError: false,
        errorNotEnoughRights: false,
        urlBD: 'http://31.31.199.37:81/api/',
        missions: [
            {
                id: '0',
                name: 'Стремление к успеху 1',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: '1',
                name: 'Стремление к успеху 2',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }

        ],
        people: [],
        commands: [
            'Тестировщики',
            'Castoroides',
            'Академия',
            'Маркетинг',
            'HR-отдел',
        ],
        rejectionComments: {},
        goals: [],
    },
    mutations: {
        authErr: (state) => {
            state.authHasError = true;
        },

        resetErr: (state) => {
            state.authHasError = false;
        },

        authCorr: (state, data) => {
            state.user = data.user;
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('userRole', data.user.role);
            state.authHasError = false;
        },

        hasErrorNotEnoughRights: (state) => {
            state.errorNotEnoughRights = true;
            setTimeout(() => state.errorNotEnoughRights = false, 5000);
        },

        logOut: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('userRole');
        },

        setGoals: (state, goals) => {
            state.goals = goals;
        },

        setEditedGoal: (state, {id, data}) => {
            state.goals.map((goal) => {
                if (goal.id === id) {
                    goal.name = data.name;
                    goal.dateStart = data.dateStart;
                    goal.dateEnd = data.dateEnd;
                    goal.descr = data.descr;
                    goal.executor = data.executor;
                }
            });
        },

        resetNewKr: (state, id) => {
            state.goals.map((goal) => {
                if (goal.id === id) {
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

        setKrs: (state, payload) => {
            let krs = payload.data;
            let goalId = payload.goalId;

            state.goals.forEach((goal) => {
                if (goal.id === goalId) {
                    goal.remainderWeight = 100;
                    goal.krs = krs;
                    goal.krs.forEach((kr) => {
                        goal.remainderWeight -= Number(kr.weight);
                    });
                }
            })
        },

        addMission: (state, newMission) => {
            let maxID = 0;
            state.missions.forEach((mission) => {
                if (mission.id > maxID) maxID = mission.id;
            })
            newMission.id = maxID + 1;
            state.missions.push(newMission)
        },

        deleteMission: (state, idMission) => {
            state.missions.forEach((mission, i) => {
                if (mission.id === idMission) state.missions.splice(i, 1);
            });
        },

        displayKr: (state, idGoal) => {
            state.goals.forEach((goal) => {
                if (goal.id === idGoal) {
                    goal.showKr = !goal.showKr;
                }
            });
        },

        setPercentOfCompletion: (state, payload) => {
            state.goals.forEach((goal) => {
                if (goal.id === payload.id) {
                    goal.percentOfCompletion = payload.percentOfCompletion.toFixed()
                }
            })
        },

        percentFromColors: (state, id) => {
            state.goals.forEach((goal) => {
                if (goal.id === id) {
                    let PercGoal = goal.percentOfCompletion
                    switch (PercGoal) {
                        case PercGoal <= 30:
                            return 'red'
                        case PercGoal >= 30 && PercGoal <= 70:
                            return 'black'
                        case PercGoal >= 70:
                            return 'blue'
                        default:
                            return 'blue'
                    }
                }
            })
        },

        setUsers: (state, users) => {
            state.people = users;
        },

        setComment: (state, {idGoal, comment}) => {
            state.rejectionComments[idGoal] = comment
        },

        deleteComment: (state, idGoal) => {
            delete state.rejectionComments[idGoal];
        }
    },

    plugins: [createPersistedState()],

    actions: {
        sumPercent: async ({state, commit, dispatch}, {idGoal, idKr, percent}) => {
            await Vue.axios.put(state.urlBD + 'key-results/' + idKr, {percent})
                .then(() => {
                    dispatch('getGoalPercent', idGoal);
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        getGoalPercent: ({state, commit}, idGoal) => {
            Vue.axios.get(state.urlBD + 'goals/' + idGoal)
                .then(({data}) => {
                    commit('setPercentOfCompletion', data);
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        login: async ({state, commit}, user) => {
            await Vue.axios.post(state.urlBD + 'login', user)
                .then(({data}) => {
                    commit('authCorr', data);
                })
                .catch(() => commit('authErr'));
        },

        register: async ({state, commit, dispatch}, newUser) => {
            await Vue.axios.post(state.urlBD + 'register', newUser)
                .then(async () => {
                    let user = {
                        email: newUser.email,
                        password: newUser.password
                    }
                    await dispatch('login', user);
                })
                .catch(() => commit('authErr'));
        },

        getGoals: async ({state, commit}) => {
            await Vue.axios.get(state.urlBD + 'goals')
                .then(({data}) => {
                    data.map(goal => {
                        goal.authorID = goal.author.id;
                        goal.author = goal.author.name;
                        goal.showKr = false;
                        goal.krs = [];
                        goal.remainderWeight = 100;
                        goal.newKr = {
                            title: '',
                            weight: '',
                            executor: '',
                        }
                    })
                    commit('setGoals', data)
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        getUsers: async ({state, commit}) => {
            await Vue.axios.get(state.urlBD + 'users')
                .then(({data}) => {
                    data.map((user) => {
                        delete user.email;
                        delete user.activity_sphere;
                        delete user.created_at;
                        delete user.updated_at;
                        return user;
                    })
                    commit('setUsers', data);
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        addGoal: async ({state, commit, dispatch}, {newGoal, krs}) => {
            await Vue.axios({
                method: 'POST',
                url: `${state.urlBD}goals`,
                data: newGoal
            }).then(({data}) => {
                let goalId = data.id;
                dispatch('addKrs', {goalId, krs});
            }).catch(err => {
                if (err.response.status === 401) commit('logOut');
                if (err.response.status === 403) commit('hasErrorNotEnoughRights');
            })
        },

        addKrs: async ({state, commit}, {goalId, krs}) => {
            krs.map (async (newKR) => {
                newKR.executor = Number(newKR.executor);
                await Vue.axios.post(state.urlBD + 'goals/' + goalId, newKR)
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
            })
        },

        editGoal: async ({state, commit}, {id, ...modifiedGoal}) => {
            await Vue.axios.put(state.urlBD + 'goals/' + id, modifiedGoal)
                .then(({data}) => {
                    commit('setEditedGoal', {id, data});
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        goalProtection: async ({state, commit}, {status, idGoal}) => {
            await Vue.axios.put(state.urlBD + 'goals/' + idGoal, {status})
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        rejectGoal: async ({state, commit}, {idGoal, comment}) => {
            await Vue.axios.put(state.urlBD + 'goals/' + idGoal, {status: 'rejected'})
                .then(() => commit('setComment', {idGoal, comment}))
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        deleteGoal: async ({state, commit}, idGoal) => {
            await Vue.axios.delete(state.urlBD + 'goals/' + idGoal)
                .then(() => {
                    if (state.rejectionComments[idGoal])
                        commit('deleteComment', idGoal)
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        getKrs: ({state, commit}, goalId) => {
            state.goals.forEach(async (goal) => {
                if (goal.id === goalId) {
                    await Vue.axios.get(state.urlBD + 'goals/' + goalId + '/key-results')
                        .then(({data}) => {
                            commit('setKrs', {data, goalId});
                        }).catch(err => {
                            if (err.response.status === 401) commit('logOut');
                            if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                        })
                }
            })
        },

        
        createKr: async ({state, commit}, goalId) => {
            let newKR;
            state.goals.forEach((goal) => {
                if (goal.id === goalId) {
                    //goal.remainderWeight -= goal.newKr.weight;
                    if (goal.newKr.executor !== '')
                        goal.newKr.executor = Number(goal.newKr.executor);
                    newKR = goal.newKr;
                }
            })
            await Vue.axios.post(state.urlBD + 'goals/' + goalId, newKR)
                .then(() => commit('resetNewKr', goalId))
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        editKr: async ({state, commit}, {id, ...modifiedKr}) => {
            await Vue.axios.put(state.urlBD + 'key-results/' + id, modifiedKr)
                .then(({data}) => {
                    commit('editKr', {id, data});
                }).catch().catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        },

        deleteKr: async ({state, commit}, {idKr}) => {
            await Vue.axios.delete(state.urlBD + 'key-results/' + idKr)
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                    if (err.response.status === 403) commit('hasErrorNotEnoughRights');
                })
        }

    },

    modules: {}
})