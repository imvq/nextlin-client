<template>
  <div>
    <div
      v-if="target"
      class="nowrap"
    >
      <span>
        Target language:
      </span>
    </div>

    <select
      v-model="selectedOption"
      @change="changerFunction"
    >
      <option
        v-for="lang in availableLangs"
        :key="lang"
      >
        {{ lang }}
      </option>
    </select>

    <select
      v-if="!target"
      @change="onLevelChanged"
    >
      <option
        v-for="level in levels"
        :key="level"
        :value="level"
      >
        {{ level }}
      </option>
    </select>

    <b-button
      v-if="!target"
      variant="warning"
      @click="onRemoving()"
    >
      <div class="white-image">
        <span class="mdi mdi-trash-can" />
      </div>
    </b-button>
  </div>
</template>

<style lang="scss" scoped>
select {
  width: 100px;
  height: 40px;
  margin: 10px;
  text-align-last:center;
}

button {
  width: 50px;
  height: 40px;
  margin: 10px;
}

.nowrap {
  width: 140px;
  margin-right: 50px;
  display: inline-block;
}
</style>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    target: {
      type: Boolean,
      required: false
    }
  },

  data() {
    return {
      dummyOptionToSelect: '',
      elemUUID: 0
    };
  },

  computed: {
    ...mapState([
      'levels',
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang'
    ]),
    ...mapGetters([
      'defaultLang'
    ]),

    selectedOption: {
      get() {
        return this.target
          ? this.selectedTargetLang
          : this.defaultLang;
      },
      set(value) {
        this.dummyOptionToSelect = value;
      }
    },

    changerFunction() {
      return this.target
        ? this.onTargetLangChanged
        : this.onLangChanged;
    }
  },

  created() {
    const lastIndex = this.selectedLangLevelPairs.length - 1;
    this.elemUUID = this.selectedLangLevelPairs[lastIndex]
      ? this.selectedLangLevelPairs[lastIndex].uuid
      : 0;
  },

  methods: {
    ...mapMutations([
      'CHANGE_TARGET_LANG',
      'CHANGE_LANG_LEVEL_PAIR',
      'REM_LANG_LEVEL_PAIR',
      'SET_RESULT_UNLOADED'
    ]),

    onTargetLangChanged(event) {
      this.SET_RESULT_UNLOADED();
      this.CHANGE_TARGET_LANG(event.target.value);
    },

    onLangChanged(event) {
      this.SET_RESULT_UNLOADED();
      this.CHANGE_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID,
        lang: event.target.value
      });
    },

    onLevelChanged(event) {
      this.SET_RESULT_UNLOADED();
      this.CHANGE_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID,
        level: event.target.value
      });
    },

    onRemoving() {
      this.SET_RESULT_UNLOADED();
      this.REM_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID
      });
    }
  }
};
</script>