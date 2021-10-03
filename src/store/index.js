import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,

  state: {
    message: "Message na store",
    user: {
      name: null,
      email: null,
      password: null,
    }
  },

  mutations: {
    setMessageMutation: (state, message) => {
      state.message = message;
    },
  },

  actions: {
    setMessage: ({ commit }, payload) => {
      commit("setMessageMutation", payload);
    },
  },
});

export default store;
