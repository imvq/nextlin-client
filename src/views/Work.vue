<template>
  <div>
    <Navbar />
    <Header />
    <WorkContent />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkContent from '@/components/WorkContent';

export default {
  name: 'Work',
  components: {
    Navbar,
    Header,
    Footer,
    WorkContent
  }
};
</script>

<style lang="scss" scoped>
body {
  padding-top: 50px;
}
</style>

