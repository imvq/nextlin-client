import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from '@/store';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import router from '@/router';
import HomeContent from '@/components/HomeContent';

describe('HomeContent.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueAxios, axios);
  localVue.use(BootstrapVue);
  localVue.use(VueRouter);

  const wrapper = mount(HomeContent, {
    store,
    router,
    localVue
  });

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
