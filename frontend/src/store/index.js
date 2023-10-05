import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      username: "",
      password: "",
    },
  },
  mutations: {
    setUsername(state, newUsername) {
      state.user.username = newUsername;
    },
  },
  actions: {
    registerUser({ commit }, username) {
      commit("setUsername", username);
    },
    clearUserData({ commit }) {
      commit("setUsername", "");
    },
  },
  getters: {
    getUsername: (state) => state.user.username,
  },
});
