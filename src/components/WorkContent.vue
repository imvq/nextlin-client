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
          native
        />
        <LangSelector
          v-for="choice in selectedLangLevelPairs"
          :key="choice.uuid"
          :value="choice.lang"
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
#work-content {
  min-height: calc(100vh - 48px - 296px - 12px);
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
