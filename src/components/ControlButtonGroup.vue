<template>
  <div>
    <b-button
      variant="primary"
      :disabled.sync="availableLangs.length === 0"
      @click="onAdding()"
    >
      ＋
    </b-button>
    <!-- <b-button
      variant="primary"
      @click="onRemoving()"
    >
      —
    </b-button> -->
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
      'currentChoices'
    ]),
    ...mapGetters([
      'defaultLevel',
      'defaultLang'
    ])
  },

  methods: {
    ...mapMutations([
      'ADD_LANG_LEVEL_PAIR'
    ]),

    onAdding() {
      this.ADD_LANG_LEVEL_PAIR({
        uid: this._uid,
        lang: this.defaultLang,
        level: this.defaultLevel
      });
    }
  }
};
</script>