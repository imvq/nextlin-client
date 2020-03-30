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
          v-for="(choice, index) in selectedLangLevelPairs"
          :key="index"
          :value="choice.lang"
          :elem-id="index"
        />
        <ControlButtonGroup />
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
import { mapState } from 'vuex';

const host = process.env.VUE_APP_SERVICE_HOST || 'http://127.0.0.1:5000';
const apiPath = `${host}/api/v1.0`;

export default {
  components: {
    LangSelector,
    ControlButtonGroup
  },

  computed: {
    ...mapState([
      'availableLangs',
      'selectedLangLevelPairs',
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
