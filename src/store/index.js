import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const levels = ['Novice', 'Middle', 'Strong', 'Master'];

export default new Vuex.Store({
  state: {
    levels,
    availableLangs: [],
    selectedTargetLang: '',
    selectedNativeLang: '',
    selectedLangLevelPairs: [],
    selectedLangLevelId: 0,
    langsLoaded: false,
    resultLoaded: false,
    result: 0
  },

  getters: {
    defaultLevel: store => store.levels[0] || '',
    defaultLang: store => store.availableLangs[0] || '',
    preparedLangsInfos: store => {
      const preparedData = [];
      store.selectedLangLevelPairs.forEach(value => {
        preparedData.push({
          [value.lang]: value.level
        });
      });
      return preparedData;
    }
  },

  mutations: {
    SET_LANGS_AS_LOADED: state => {
      state.langsLoaded = true;
    },
    SET_RESULT_AS_LOADED: (state, result) => {
      state.result = result;
      state.resultLoaded = true;
    },
    CHANGE_TARGET_LANG: (state, newTargetLang) => {
      state.selectedTargetLang = newTargetLang;
    },
    CHANGE_NATIVE_LANG: (state, newNativeLang) => {
      state.selectedNativeLang = newNativeLang;
    },
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
      if (state.selectedLangLevelId) {
        --state.selectedLangLevelId;
      }
    }
  }
});
