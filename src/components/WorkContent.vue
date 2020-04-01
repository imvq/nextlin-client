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
          target
        />
        <LangSelector
          native
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
          @click="analyse"
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
import { mapState, mapGetters } from 'vuex';
import { apiPath } from '@/constants';

export default {
  components: {
    LangSelector,
    ControlButtonGroup
  },

  computed: {
    ...mapState([
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang',
      'selectedNativeLang',
    ]),
    ...mapGetters([
      'preparedLangsInfos'
    ])
  },

  methods: {
    analyse() {
      const toSend = {
        'native': this.selectedNativeLang,
        'target_lang': this.selectedTargetLang,
        'known_langs': this.preparedLangsInfos
      };
      alert(JSON.stringify(toSend));
      this.axios.post(`${apiPath}/langs/analyse`, toSend)
      .then(response => {
        alert(JSON.stringify(response));
      });
    }
  }
};
</script>
