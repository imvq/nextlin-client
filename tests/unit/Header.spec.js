import { mount } from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header.vue', () => {
  const wrapper = mount(Header);

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
