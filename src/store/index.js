import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const levels = ['Novice', 'Middle', 'Strong', 'Master'];

export default new Vuex.Store({
  state: {
    levels,
    availableLangs: [],
    selectedLangLevelPairs: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
