import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from '@/store';
import HomeContent from '@/components/HomeContent';

describe('HomeContent.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueAxios, axios);

  const wrapper = mount(HomeContent, {
    store,
    localVue
  });

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
