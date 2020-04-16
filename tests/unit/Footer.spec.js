import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer.vue', () => {
  const wrapper = mount(Footer);

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
