<template>
  <div>
    <select v-model="langVal">
      <option
        v-for="lang in langs"
        :key="lang"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
    <select v-model="levelVal">
      <option
        v-for="level in levels"
        :key="level"
        :value="level"
      >
        {{ level }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return{
      langs: ['English', 'German', 'Ukrainian'],
      levels: ['Novice', 'Middle', 'Strong', 'Master'],
      testVal: null
  };
}
};
</script>