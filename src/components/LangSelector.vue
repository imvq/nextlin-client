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

    <select
      v-if="native"
      disabled
    >
      <option>Native</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select {
  width: 100px;
  height: 40px;
  margin: 10px;
  text-align-last:center;
}

.nowrap {
  display: inline-block;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    elemId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: Boolean,
      required: false
    },
    native: {
      type: Boolean,
      required: false
    }
  },

  computed: {
    ...mapState([
      'levels',
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang',
      'selectedNativeLang'
    ]),

    optionToSelect() {
      return this.target
        ? this.selectedTargetLang
        : this.selectedNativeLang;
    },

    selectedOption: {
      get() {
        return this.optionToSelect;
      },
      set(value) {
        this.optionToSelect = value;
      }
    },

    changerFunction() {
      return this.target ? this.onTargetLangChanged
        : this.native ? this.onNativeLangChanged
        : this.onLangChanged;
    }
  },

  methods: {
    ...mapMutations([
      'CHANGE_TARGET_LANG',
      'CHANGE_NATIVE_LANG',
      'CHANGE_LANG_LEVEL_PAIR'
    ]),

    onTargetLangChanged(event) {
      this.CHANGE_TARGET_LANG(event.target.value);
    },

    onNativeLangChanged(event) {
      this.CHANGE_NATIVE_LANG(event.target.value);
    },

    onLangChanged(event) {
      this.CHANGE_LANG_LEVEL_PAIR({
        index: this.elemId,
        lang: event.target.value
      });
    },

    onLevelChanged(event) {
      this.CHANGE_LANG_LEVEL_PAIR({
        index: this.elemId,
        level: event.target.value
      });
    }
  }
};
</script>