<template>
  <section class="py-5">
    <div class="container">
      <h3>Learn your success index</h3>
      <p>
        Choose your native language and languages you know.
        Also choose your level for each language you know. If you don't know your
        exact level, choose 'Middle'.
        If you choose multiple identical languages, the one with the highest level will be chosen
        (ignoring any other choices).
        There must be at least one native language.
        The service does not take into account social aspects that can affect the complexity of learning a particular language,
        as well as other aspects that are not directly related to the linguistic characteristics of chosen languages.
        You will see the success rate of learning your chosen language, expressed as a percentage.
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
        <transition name="fade">
          <TextInCircle
            v-if="resultLoaded"
          />
        </transition>
        <br>
        <br>
        <p>
          Note that the numbers obtained are not formally confirmed data, and are a theoretical estimate of this experimental system.
        </p>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import LangSelector from '@/components/LangSelector';
import ControlButtonGroup from '@/components/ControlButtonGroup';
import TextInCircle from '@/components/TextInCircle';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { apiPath } from '@/constants';

export default {
  components: {
    LangSelector,
    ControlButtonGroup,
    TextInCircle
  },

  computed: {
    ...mapState([
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang',
      'selectedNativeLang',
      'resultLoaded'
    ]),
    ...mapGetters([
      'preparedLangsInfos'
    ])
  },

  methods: {
    ...mapMutations([
      'SET_RESULT_AS_LOADED'
    ]),

    analyse() {
      this.axios.post(`${apiPath}/langs/analyse`, {
        'target_lang': this.selectedTargetLang,
        'known_langs': this.preparedLangsInfos
          .concat([
            { [this.selectedNativeLang]: 'Native' }
          ])
      })
      .then(response => {
        this.SET_RESULT_AS_LOADED(response['data']['success_index']);
      })
      .catch(error => {
        alert('The service server does not response');
      });
    }
  }
};
</script>
