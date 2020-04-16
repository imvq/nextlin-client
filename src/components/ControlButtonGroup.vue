<template>
  <div>
    <b-button
      id="button-adding"
      variant="primary"
      :disabled.sync="availableLangs.length === 0"
      @click="onAdding()"
    >
      ＋
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
import { generateUUID } from '@/helpers';

export default {
  computed: {
    ...mapState([
      'uuids',
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
      'ADD_LANG_LEVEL_PAIR',
      'SET_RESULT_UNLOADED'
    ]),

    onAdding() {
      this.SET_RESULT_UNLOADED();
      this.ADD_LANG_LEVEL_PAIR({
        uuid: generateUUID(this.uuids),
        lang: this.defaultLang,
        level: this.defaultLevel
      });
    }
  }
};
</script>