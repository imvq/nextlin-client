<template>
  <div>
    <b-button
      variant="primary"
      :disabled.sync="availableLangs.length === 0"
      @click="onAdding()"
    >
      ＋
    </b-button>
    <b-button
      variant="primary"
      @click="onRemoving()"
    >
      —
    </b-button>
  </div>
</template>

<style lang="scss" scoped>
button {
  width: 100px;
  height: 40px;
  margin: 10px;
}
</style>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState([
      'levels',
      'availableLangs',
      'currentChoices',
      'selectedLangLevelId'
    ]),
    ...mapGetters([
      'defaultLevel',
      'defaultLang'
    ])
  },

  methods: {
    ...mapMutations([
      'ADD_LANG_LEVEL_PAIR',
      'REM_LANG_LEVEL_PAIR',
      'INC_CURRENT_PAIR_ID',
      'DEC_CURRENT_PAIR_ID'
    ]),

    onAdding() {
      this.ADD_LANG_LEVEL_PAIR({
        id: this.selectedLangLevelId,
        lang: this.defaultLang,
        level: this.defaultLevel
      });
      this.INC_CURRENT_PAIR_ID();
    },

    onRemoving() {
      this.REM_LANG_LEVEL_PAIR();
      this.DEC_CURRENT_PAIR_ID();
    }
  }
};
</script>