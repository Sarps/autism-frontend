import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [
      "109895566.thm.jpg",
      "109896164.thm.jpg",
      "110375222.thm.jpg",
      "110376190.thm.jpg"
    ],
    score: 0,
    level: 1,
    timer: 20,
    confirm_dialog: false,
    confirm_choice: false
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },

    shuffleCards(state) {
      state.images.sort(() => Math.random() - 0.5);
    },

    dialogVisibility(state, value) {
      state.confirm_dialog = value;
    },

    dialogChoice(state, value) {
      state.confirm_choice = value;
      state.confirm_dialog = false;
    },

    incrementScore(state) {
      state.score += 10;
    }
  },
  actions: {
    loadCards() {}
  }
});
