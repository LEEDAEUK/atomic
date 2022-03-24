import { shallowMount } from '@vue/test-utils';
import AtButton from './AtButton.vue';

describe('AtButton.vue', () => {
  test('버튼 컴포넌트의 propsButtonText에 props가 잘 들어가는지 확인', () => {
    const wrapper = shallowMount(AtButton, {
      propsData: {
        propsButtonText: 'Login',
      },
    });
    console.log(wrapper.find('.at-button').text());
    expect(wrapper.find('.at-button').text()).toBe('Login');
  });

  test('버튼 컴포넌트의 propsButtonBackgroundColor에 props가 잘 들어가는지 확인', () => {
    const wrapper = shallowMount(AtButton, {
      propsData: {
        propsButtonBackgroundColor: 'white',
      },
    });
    console.log(wrapper.attributes().color);
    expect(wrapper.attributes().color).toBe('white');
  });

  test('버튼 컴포넌트의 propsButtonTextColor에 props가 잘 들어가는지 확인', () => {
    const wrapper = shallowMount(AtButton, {
      propsData: {
        propsButtonTextColor: 'red',
      },
    });
    console.log(wrapper.find('.at-button').classes());
    expect(wrapper.find('.at-button').classes()).toContain('red--text');
  });
});
