<template>
  <div>
    <b-button
      variant="primary"
      :disabled="!langsAvailable"
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
import { bus } from '../main';

export default {
  props: {
    langsAvailable: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onAdding() {
      bus.$emit('addingPressed');
    },
    onRemoving() {
      bus.$emit('removingPressed');
    }
  }
};
</script>