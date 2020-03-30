<template>
  <div>
    <select
      @change="onLangChanged"
    >
      <option
        v-for="lang in availableLangs"
        :key="lang"
      >
        {{ lang }}
      </option>
    </select>
    <select
      v-if="!native"
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
      v-else
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
</style>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    elemId: {
      type: Number,
      required: false,
      default: 0
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
      'selectedLangLevelPairs'
    ])
  },

  methods: {
    onLangChanged(event) {
      this.selectedLangLevelPairs[this.elemId].lang 
        = event.target.value;
    },

    onLevelChanged(value) {
      this.selectedLangLevelPairs[this.elemId].level 
        = event.target.value;
    }
  }
};
</script>