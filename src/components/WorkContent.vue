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
        />
        <LangSelector
          v-for="x in currentChoices"
          :key="x.id"
        />
        <ControlButtonGroup />
        <b-button
          class="btn-lg"
          pill
          variant="primary"
          @click="analyze"
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
      allChoices: [
        { lang: 'English' },
        { lang: 'German' }
      ],
      currentChoices: []
    };
  },
  created() {
    this.currentChoices.push({
      id: 0,
      level: 'Novice',
      ...this.allChoices[0]
    });

    bus.$on('addingPressed', () => {
      this.currentChoices.push({
        id: this.currentChoices.length > 0
              ? this.currentChoices.length
              : 0,
        level: 'Novice',
        ...this.allChoices[0]
      });
    });

    bus.$on('removingPressed', () => {
      this.currentChoices.pop();
    });
  },
  methods: {
    analyze() {
      alert(`${apiPath}/langs/analyse`);
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
