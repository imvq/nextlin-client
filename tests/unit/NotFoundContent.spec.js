import { mount } from '@vue/test-utils';
import NotFoundContent from '@/components/NotFoundContent';

describe('NotFoundContent.vue', () => {
  const wrapper = mount(NotFoundContent);

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
