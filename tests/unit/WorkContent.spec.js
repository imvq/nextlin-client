import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from '@/store';
import WorkContent from '@/components/WorkContent';

describe('ControlButtonGroup.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueAxios, axios);

  const wrapper = mount(WorkContent, {
    store,
    localVue
  });

  it('The "analyse" button Is disabled by default', () => {
    const analyseButton = wrapper.find('#button-analyse');
    expect(analyseButton.attributes().disabled).toBe('true');
  });
});
