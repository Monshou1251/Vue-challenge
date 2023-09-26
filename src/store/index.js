import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      email: "",
      username: "",
      password: "",
    },
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
    updateUsername(state, newUsername) {
      state.user.username = newUsername;
    },
    updateEmail(state, newEmail) {
      state.user.email = newEmail;
    },
  },
  actions: {
    registerUser({ commit }, userData) {
      commit("setUser", userData);
    },
  },
});
