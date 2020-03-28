<template>
  <section class="py-5">
    <div class="container">
      <h3>Learn your success index</h3>
      <p>
        Choose your native language and languages you know.
        Also choose your knowleadge levels. If you don't know your
        exact level, choose 'Middle'.
      </p>
      <div class="text-center">
        <LangSelector />
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper-cenetered {
  text-align: center;
}
</style>

<script>
import LangSelector from '@/components/LangSelector';
export default {
  components: {
    LangSelector
  }
};
</script>
