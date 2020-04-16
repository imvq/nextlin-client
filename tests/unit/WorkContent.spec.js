import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from '@/store';
import BootstrapVue from 'bootstrap-vue';
import WorkContent from '@/components/WorkContent';

describe('ControlButtonGroup.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueAxios, axios);
  localVue.use(BootstrapVue);

  const wrapper = mount(WorkContent, {
    store,
    localVue
  });

  it('The "analyse" button Is disabled by default', () => {
    const analyseButton = wrapper.find('#button-analyse');
    expect(analyseButton.attributes().disabled).toBe('disabled');
  });

  it('No-native-lang-warning visible at start', () => {
    const labelNativeLangWarn = wrapper.find('#warn-native-lang');
    expect(labelNativeLangWarn).not.toBeUndefined;
  });
});
