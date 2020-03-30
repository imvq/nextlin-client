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
          id="native"
          :native="true"
          :langs="allChoices"
        />
        <LangSelector
          v-for="(choice, index) in currentChoices"
          :key="index"
          :langs="allChoices"
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
import { bus } from '../main';
import LangSelector from '@/components/LangSelector';
import ControlButtonGroup from '@/components/ControlButtonGroup';

const host = process.env.VUE_APP_SERVICE_HOST || 'http://127.0.0.1:5000';
const apiPath = `${host}/api/v1.0`;

export default {
  components: {
    LangSelector,
    ControlButtonGroup
  },
  data() {
    return {
      allChoices: [],
      currentChoices: [],
      currentChoicesUniqueKey: 0
    };
  },
  created() {
    this.getLangs();

    bus.$on('addingPressed', () => {
      ++this.currentChoicesUniqueKey;
      this.currentChoices.push(this.allChoices[0]);
    });

    bus.$on('removingPressed', () => {
      this.currentChoices.pop();
    });
  },
  methods: {
    getLangs() {
      this.axios.get(`${apiPath}/langs/available`)
      .then((response) => {
        response['data']['results'].forEach((lang) => {
          this.allChoices.push(lang);
        });
      })
      .catch((error) => {
        alert(error);
      });
    },
    analyze() {
      this.axios.post(`${apiPath}/langs/analyse`, {
        'native': 'Vietnamese',
        'target_lang': 'Dutch',
        'known_langs': [{'German': 'Middle'}, {'Mandarin': 'Master'}]
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(error);
      });
    }
  }
};
</script>
