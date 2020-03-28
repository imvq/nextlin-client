<template>
  <div>
    <Navbar />
    <Header />
    <div>
      <p>Work here</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Work",
  components: {
    Navbar,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
body {
  padding-top: 50px;
}
</style>

