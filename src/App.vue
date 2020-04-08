<template>
  <div id="app">
    <Navbar />
    <Header />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<style lang="scss">
@import url("https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css");
</style>

<style lang="scss" scoped>
#app {
  overflow-x: hidden;
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
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer
  },
};
</script>
