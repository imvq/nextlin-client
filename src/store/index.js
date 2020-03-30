import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const levels = ['Novice', 'Middle', 'Strong', 'Master'];

export default new Vuex.Store({
  state: {
    levels,
    availableLangs: [],
    selectedLangLevelPairs: [],
    selectedLangLevelId: 0
  },

  getters: {
    defaultLevel: store => store.levels[0] || '',
    defaultLang: store => store.availableLangs[0] || ''
  },

  mutations: {
    CHANGE_LANG_LEVEL_PAIR: (state, { index, lang, level }) => {
      if (lang) {
        state.selectedLangLevelPairs[index].lang = lang;
      }
      if (level) {
        state.selectedLangLevelPairs[index].level = level;
      }
    },
    ADD_LANG_LEVEL_PAIR: (state, pair) => {
      state.selectedLangLevelPairs.push(pair);
    },
    REM_LANG_LEVEL_PAIR: state => {
      state.selectedLangLevelPairs.pop();
    },
    INC_CURRENT_PAIR_ID: state => {
      ++state.selectedLangLevelId;
    },
    DEC_CURRENT_PAIR_ID: state => {
      --state.selectedLangLevelId;
    }
  }
});
