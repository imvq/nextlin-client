<template>
  <div>
    <select>
      <option
        v-for="lang in $store.state.availableLangs"
        :key="lang"
      >
        {{ lang }}
      </option>
    </select>
    <select v-if="!native">
      <option
        v-for="level in levels"
        :key="level"
        :value="level"
        :disabled="true"
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
  created() {
    console.log(this.elemId);
  }
};
</script>