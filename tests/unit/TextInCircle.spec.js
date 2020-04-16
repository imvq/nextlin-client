import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store';
import TextInCircle from '@/components/TextInCircle';

describe('TextInCircle.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(TextInCircle, {
    store,
    localVue
  });

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
