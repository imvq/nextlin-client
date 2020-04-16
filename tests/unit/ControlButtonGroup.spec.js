import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store';
import BootstrapVue from 'bootstrap-vue';
import ControlButtonGroup from '@/components/ControlButtonGroup';

describe('ControlButtonGroup.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(BootstrapVue);

  const wrapper = mount(ControlButtonGroup, {
    store,
    localVue
  });

  it('Is disabled by default', () => {
    const addingButton = wrapper.find('#button-adding');
    expect(addingButton.attributes().disabled).toBe('disabled');
  });
});
