import { mapState, mapMutations } from 'vuex';
import { apiPath } from '@/constants';

export default {
  computed: {
    ...mapState([
      'availableLangs',
      'langsLoaded'
    ])
  },

  created() {
    if (!this.langsLoaded) {
      this.SET_LANGS_AS_LOADED();
      this.setLangs();
    }
  },

  methods: {
    ...mapMutations([
      'SET_AVAILABLE_LANGS',
      'SET_LANGS_AS_LOADED'
    ]),

    setLangs() {
      this.axios.get(`${apiPath}/langs/available`)
      .then(response => {
        const availableLangs = [];
        response['data']['results'].forEach(langName => {
          availableLangs.push(langName);
        });
        this.SET_AVAILABLE_LANGS(availableLangs);
        this.SET_LANGS_AS_LOADED();
      });
    }
  }
};
