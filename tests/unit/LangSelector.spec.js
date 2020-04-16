import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store';
import LangSelector from '@/components/LangSelector';

describe('LangSelector.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(LangSelector, {
    store,
    localVue
  });

  it('Levels are present', () => {
    const levels = store.state.levels;
    expect(levels).not.toBeUndefined;
  });

  it('Contains all the choices', () => {
    const levels = store.state.levels;
    levels.forEach(value => {
      expect(wrapper.html()).toContain(`<option value="${value}">`);
    });
  });
});
