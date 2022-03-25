import { shallowMount } from '@vue/test-utils';
import AtErrorMessage from './AtErrorMessage.vue';

describe('AtErrorMessage.vue', () => {
  test('propsText props가 잘 들어가는지 확인', () => {
    const wrapper = shallowMount(AtErrorMessage, {
      propsData: {
        propsText: 'testErrorMessageDescription',
      },
    });
    console.log(wrapper.find('.at-error-message').text());
    expect(wrapper.find('.at-error-message').text()).toBe(
      'testErrorMessageDescription',
    );
  });
});
