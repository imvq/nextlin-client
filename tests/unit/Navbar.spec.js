import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from '@/router';
import Navbar from '@/components/Navbar';

describe('Navbar.vue', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  const wrapper = mount(Navbar, {
    router,
    localVue
  });

  it('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
