import { mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar';

describe('Navbar.vue', () => {
  const wrapper = mount(Navbar);

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
