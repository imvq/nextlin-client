<template>
  <section
    id="work-content"
    class="py-5"
  >
    <div class="container">
      <h3>Let's find out similarity index for your language</h3>
      <p>
        Choose your native language and languages you know.
        Also choose your level for each language you know. If you don't
        know your exact level, choose 'Middle'.
        <br>If you choose <strong>multiple</strong> identical languages,
        the one with the <strong>highest</strong> level will be chosen
        (ignoring any other choices).
        <br>There must be <strong>at least one native</strong> language.
        <br>
        <br>The service computes <strong>similarity</strong> (percentage value)
        between the <strong>target</strong> language and
        <strong>each language you select as known</strong>,
        giving you the best optimistic similarity value.
        <br>While analysing, the service
        <strong>only cares about linguistic characteristics</strong> of the
        comparing languages.
        <br>Please, note, that the service does not take into account
        social, psychological or individual aspects that can affect the
        complexity of learning a particular language,
        as well as other aspects that are not directly
        related to the linguistic characteristics of chosen languages.
      </p>
      <div class="text-center">
        <LangSelector
          target
        />
        <LangSelector
          v-for="choice in selectedLangLevelPairs"
          :key="choice.uuid"
          :value="choice.lang"
        />
        <ControlButtonGroup />
        <p
          v-if="!isANativeLangSelected"
          id="warn-native-lang"
          class="warn-label"
        >
          *at least one native language is required
        </p>
        <p
          v-if="!noDuplicatesPresent"
          id="warn-duplicates"
          class="warn-label"
        >
          *duplicates present; a language with the highest priority will
          be chosen, the others will be ignored
        </p>
        <b-button
          id="button-analyse"
          class="btn-lg"
          pill
          variant="primary"
          :disabled="!isANativeLangSelected"
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
#work-content {
  min-height: calc(100vh - 48px - 296px - 12px);
}

.warn-label {
  color: red;
}

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
import loaderMixin from '@/mixins/loaderMixin';

export default {
  components: {
    LangSelector,
    ControlButtonGroup,
    TextInCircle
  },

  mixins: [loaderMixin],

  computed: {
    ...mapState([
      'availableLangs',
      'selectedLangLevelPairs',
      'selectedTargetLang',
      'resultLoaded'
    ]),
    ...mapGetters([
      'preparedLangsInfos',
      'isANativeLangSelected',
      'noDuplicatesPresent'
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
