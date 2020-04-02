<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  overflow: hidden;
  width: 100vw;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(0.3em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>

<script>
export default {
  name: 'App'
};
</script>
