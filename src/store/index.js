import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const levels = ['Novice', 'Middle', 'Strong', 'Master', 'Native'];
const DEFAULT_TARGET_LANG_INDEX = 2;
const DEFAULT_NATIVE_LANG_INDEX = 13;

function changeLang(state, elemUUID, lang) {
  const target = state.selectedLangLevelPairs.find(
    elem => elem.uuid === elemUUID
  );
  if (target) {
    target.lang = lang;
  }
}

function changeLevel(state, elemUUID, level) {
  const target = state.selectedLangLevelPairs.find(
    elem => elem.uuid === elemUUID
  );
  if (target) {
    target.level = level;
  }
}

export default new Vuex.Store({
  state: {
    uuids: [],
    levels,
    availableLangs: [],
    selectedTargetLang: '',
    selectedLangLevelPairs: [],
    selectedLangLevelId: 0,
    langsLoaded: false,
    resultLoaded: false,
    result: '0%'
  },

  getters: {
    defaultLevel: state => state.levels[0] || '',
    defaultLang: state => state.availableLangs[0] || '',
    preparedLangsInfos: state => {
      const preparedData = [];
      state.selectedLangLevelPairs.forEach(value => {
        preparedData.push({
          [value.lang]: value.level
        });
      });
      return preparedData;
    },
    isANativeLangSelected: (_, getters) => getters.preparedLangsInfos
      .filter(langLevelPair => langLevelPair.level === 'Native')
      .length
  },

  mutations: {
    SET_AVAILABLE_LANGS: (state, langs) => {
      langs.forEach(langName => {
        state.availableLangs.push(langName);
      });
      state.selectedTargetLang = state.availableLangs
          .length > DEFAULT_TARGET_LANG_INDEX
        ? state.availableLangs[DEFAULT_TARGET_LANG_INDEX]
        : state.availableLangs.length > 0
        ? state.availableLangs[0]
        : '';
      state.selectedNativeLang = state.availableLangs
          .length > DEFAULT_NATIVE_LANG_INDEX
        ? state.availableLangs[DEFAULT_NATIVE_LANG_INDEX]
        : state.availableLangs.length > 0
        ? state.availableLangs[0]
        : '';
    },

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

    CHANGE_LANG_LEVEL_PAIR: (state, { elemUUID, lang, level }) => {
      if (lang) {
        changeLang(state, elemUUID, lang);
      }

      if (level) {
        changeLevel(state, elemUUID, level);
      }
    },

    ADD_LANG_LEVEL_PAIR: (state, pair) => {
      state.selectedLangLevelPairs.push(pair);
    },

    REM_LANG_LEVEL_PAIR: (state, { elemUUID }) => {
      const target = state.selectedLangLevelPairs.find(
        elem => elem.uuid === elemUUID
      );
      if (target) {
        state.selectedLangLevelPairs.splice(
          state.selectedLangLevelPairs.indexOf(target), 1
        );
      }
    }
  }
});
