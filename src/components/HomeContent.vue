<template>
  <section class="py-5">
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
.wrapper-cenetered {
  text-align: center;
}
</style>

<script>
import { mapState } from 'vuex';
import { apiPath } from '@/constants';

export default {
  computed: {
    ...mapState([
      'availableLangs'
    ])
  },

  created() {
    this.setLangs();
  },

  methods: {
    setLangs() {
      this.axios.get(`${apiPath}/langs/available`)
      .then(response => {
        response['data']['results'].forEach(langName => {
          this.availableLangs.push(langName);
        });
      });
    }
  }
};
</script>
