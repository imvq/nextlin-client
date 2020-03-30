<template>
  <div>
    <select>
      <option
        v-for="lang in langs"
        :key="lang"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
    <select v-if="!native">
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
export default {
  props: {
    langs: {
      type: Array,
      required: true
    },
    native: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      levels: ['Novice', 'Middle', 'Strong', 'Master']
    };
  }
};
</script>