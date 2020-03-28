<template>
  <div>
    <Navbar />
    <Header />
    <HomeContent />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Footer,
    HomeContent
  }
};
</script>

<style lang="scss" scoped>
body {
  padding-top: 50px;
}
</style>

