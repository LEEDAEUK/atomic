import { shallowMount } from '@vue/test-utils';
import AtButton from './AtButton.vue';

describe('AtButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AtButton, {
      propsData: {
        propsButtonText: 'Login',
        propsButtonBackgroundColor: 'white',
        propsButtonTextColor: 'red',
      },
    });
  });

  test('버튼 컴포넌트의 propsButtonText에 props가 잘 들어가는지 확인', () => {
    expect(wrapper.find('.at-button').text()).toBe('Login');
  });

  test('버튼 컴포넌트의 propsButtonBackgroundColor에 props가 잘 들어가는지 확인', () => {
    expect(wrapper.find('.at-button').attributes().color).toBe('white');
  });

  test('버튼 컴포넌트의 propsButtonTextColor에 props가 잘 들어가는지 확인', () => {
    expect(wrapper.find('.at-button').classes()).toContain('red--text');
  });
});
