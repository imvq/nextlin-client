<template>
  <div
    class="circle"
  >
    {{ result }}
  </div>
</template>

<style lang="scss" scoped>
.circle {
  align-content: center;
  align-self: center;
  text-align: center;
  font-size: 10vh;
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #222;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'result'
    ])
  }
};  
</script>