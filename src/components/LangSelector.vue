<template>
  <div>
    <select v-model="testVal">
      <option
        v-for="item in test"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
    <select v-model="testVal">
      <option
        v-for="item in test"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return{
      test: ['English', 'German', 'Ukrainian'],
      levels: ['Novice', 'Middle', 'Strong', 'Master'],
      testVal: null
  };
}
};
</script>