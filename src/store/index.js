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
import router from '@/router'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authHasError: false,
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
            'Marketing',
            'Человек Умелый',
        ],
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
            state.authHasError = false;
        },

        logOut: () => {
            localStorage.removeItem('token');
            router.push('/');
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

        setKrs: (state, krs) => {
            state.goals.forEach((goal) => {
                if (goal.id === krs[0].goal_id) {
                    goal.krs = krs
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

        createKr: (state, goalId) => {
            state.goals.forEach((goal) => {
                if (goal.id === goalId) {
                    //goal.remainderWeight -= goal.newKr.weight;
                    if (goal.newKr.executor !== '')
                        goal.newKr.executor = Number(goal.newKr.executor);
                    Vue.axios.post(state.urlBD + 'goals/' + goalId, goal.newKr)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            if (err.response.status === 401) {
                                localStorage.removeItem('token');
                                router.push('/');
                            } else throw err
                        })
                }
                goal.newKr = {
                    title: '',
                    weight: '',
                    executor: '',
                }
            })
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
                })
        },

        getGoalPercent: ({state, commit}, idGoal) => {
            Vue.axios.get(state.urlBD + 'goals/' + idGoal)
                .then(({data}) => {
                    commit('setPercentOfCompletion', data);
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        },

        login: async ({state, commit}, user) => {
            await Vue.axios.get(state.urlBD + 'login', {
                params: user
            })
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
                })
        },

        addGoal: async ({state}, newGaol) => {
            await Vue.axios({
                method: 'POST',
                url: `${state.urlBD}goals`,
                data: newGaol
            }).catch(error => console.log(error));
        },

        editGoal: async ({state, commit}, {id, ...modifiedGoal}) => {
            await Vue.axios.put(state.urlBD + 'goals/' + id, modifiedGoal)
                .then(({data}) => {
                    commit('setEditedGoal', {id, data});
                })
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        },

        goalProtection: async ({state, commit}, {status, idGoal}) => {
            await Vue.axios.put(state.urlBD + 'goals/' + idGoal, {status})
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        },

        deleteGoal: async ({state, commit}, idGoal) => {
            await Vue.axios.delete(state.urlBD + 'goals/' + idGoal)
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        },

        getKrs: ({state, commit}, goalId) => {
            state.goals.forEach(async (goal) => {
                if (goal.id === goalId) {
                    await Vue.axios.get(state.urlBD + 'goals/' + goalId + '/key-results')
                        .then(({data}) => {
                            commit('setKrs', data);
                        }).catch(error => console.log(error));
                }
            })
        },

        editKr: async ({state, commit}, {id, ...modifiedKr}) => {
            await Vue.axios.put(state.urlBD + 'key-results/' + id, modifiedKr)
                .then(({data}) => {
                    commit('editKr', {id, data});
                }).catch().catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        },

        deleteKr: async ({state, commit}, {idKr}) => {
            await Vue.axios.delete(state.urlBD + 'key-results/' + idKr)
                .catch(err => {
                    if (err.response.status === 401) commit('logOut');
                })
        }


    },

    modules: {}
})