<template>
  <div>
    <select
      v-model="langVal"
    >
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

<style lang="scss" scoped>
select {
  width: 100px;
  height: 40px;
  margin: 10px;
  text-align-last:center;
}
</style>

<script>
import { bus } from '../main';

export default {
  data() {
    return{
      langs: ['English', 'German', 'Ukrainian'],
      levels: ['Novice', 'Middle', 'Strong', 'Master'],
      testVal: null
    };
  },
  created() {
    bus.$on('addingPressed', () => {
      alert('Adding pressed');
    });
    bus.$on('removingPressed', () => {
      alert('Removing pressed');
    });
  }
};
</script>