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
        <LangSelector
          :native="true"
        />
        <LangSelector
          v-for="(choice, index) in $store.state.currentChoices"
          :key="index"
          :elem-id="index"
        />
        <ControlButtonGroup
          :langs-available.sync="allChoices.length > 0"
        />
        <b-button
          class="btn-lg"
          pill
          variant="primary"
        >
          Analyze
        </b-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper-cenetered {
  text-align: center;
}

.btn-lg {
  margin-top: 10px;
}
</style>

<script>
import LangSelector from '@/components/LangSelector';
import ControlButtonGroup from '@/components/ControlButtonGroup';

const host = process.env.VUE_APP_SERVICE_HOST || 'http://127.0.0.1:5000';
const apiPath = `${host}/api/v1.0`;

export default {
  components: {
    LangSelector,
    ControlButtonGroup
  },

  created: () => this.getLangs(),

  methods: {
    getLangs() {
      this.axios.get(`${apiPath}/langs/available`)
      .then(response => {
        response['data']['results'].forEach(langName => {
          this.$store.state.availableLangs.push(langName);
        });
      });
    },

    analyze() {
      // TODO: Analysis stuff.
    }
  }
};
</script>
