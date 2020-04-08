<template>
  <div>
    <div
      v-if="target || native"
      class="nowrap"
    >
      <span>
        {{ selectionDescription }}:
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
      v-if="!native && !target"
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
      v-if="!native && !target"
      variant="primary"
      @click="onRemoving()"
    >
      —
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
  width: 100px;
  height: 40px;
  margin: 10px;
}

.nowrap {
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
    },
    native: {
      type: Boolean,
      required: false
    }
  },

  data() {
    return {
      selectionDescription: this.target
        ? 'Target lang'
        : this.native
        ? 'Native lang'
        : '',
      dummyOptionToSelect: '',
      elemUUID: 0
    };
  },

  computed: {
    ...mapState([
      'levels',
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang',
      'selectedNativeLang'
    ]),
    ...mapGetters([
      'defaultLang'
    ]),

    selectedOption: {
      get() {
        return this.target
          ? this.selectedTargetLang
          : this.native
          ? this.selectedNativeLang
          : this.defaultLang;
      },
      set(value) {
        this.dummyOptionToSelect = value;
      }
    },

    changerFunction() {
      return this.target ? this.onTargetLangChanged
        : this.native ? this.onNativeLangChanged
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
      'CHANGE_NATIVE_LANG',
      'CHANGE_LANG_LEVEL_PAIR',
      'REM_LANG_LEVEL_PAIR'
    ]),

    onTargetLangChanged(event) {
      this.CHANGE_TARGET_LANG(event.target.value);
    },

    onNativeLangChanged(event) {
      this.CHANGE_NATIVE_LANG(event.target.value);
    },

    onLangChanged(event) {
      this.CHANGE_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID,
        lang: event.target.value
      });
    },

    onLevelChanged(event) {
      this.CHANGE_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID,
        level: event.target.value
      });
    },

    onRemoving() {
      this.REM_LANG_LEVEL_PAIR({
        elemUUID: this.elemUUID
      });
    }
  }
};
</script>