import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        title: "list 1",
        cards: ["card1", "card2", "card3"],
      },
    ],
  },
  mutations: {
    addList(state, title) {
      state.lists.push({ title: title });
    },
    removeList(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addCard(state, payload) {
      state.lists[payload.listIndex].cards.push(
        payload.title
      )
    },
    removeCard(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
  },
  actions: {
    addList({ commit }, title) {
      commit("addList", title);
    },
    removeList({ commit }, payload) {
      commit("removeList", payload);
    },
    addCard({ commit }, payload) {
      commit("addCard", payload);
    },
    removeCard({ commit }, payload) {
      commit("removeCard", payload);
    },
  },
  modules: {
  }
})
