import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store';
import ControlButtonGroup from '@/components/ControlButtonGroup';

describe('ControlButtonGroup.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const wrapper = mount(ControlButtonGroup, {
    store,
    localVue
  });

  it('Is disabled by default', () => {
    expect(
      wrapper
      .find('#button-adding')
      .attributes()
      .disabled
    ).toBe('true');
  });
});
