import * as types from '../types';

const state = {
    counter: 0
}

const getters = {
    [types.DOUBLE_COUNTER]: ({ counter }) => {
        return counter * 2
    },
    [types.CLICK_COUNTER]: ({ counter }) => `${counter} clicks`
}

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
}

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by)
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by)
        }, payload.duration);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}