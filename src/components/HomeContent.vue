<template>
  <section
    id="home-content"
    class="py-5"
  >
    <div class="container">
      <h1>What we are?</h1>
      <p>
        If you are a lover of linguistics and are trying to choose a new language to study,
        our service will help you determine how successful your choice of a language can be, depending on what languages you can speak at the moment and at what level.
      </p>
      <div class="text-center">
        <router-link to="/work">
          <b-button
            class="btn-lg"
            pill
            variant="primary"
          >
            Start now
          </b-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
#home-content {
  min-height: calc(100vh - 48px - 296px - 12px);
}

.wrapper-cenetered {
  text-align: center;
}
</style>

<script>
import loaderMixin from '@/mixins/loaderMixin';

export default {
  mixins: [loaderMixin]
};
</script>
