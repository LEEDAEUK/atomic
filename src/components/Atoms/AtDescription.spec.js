import { shallowMount } from '@vue/test-utils';
import AtDescription from './AtDescription.vue';

describe('AtDescription.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AtDescription, {
      propsData: {
        propsText: 'testDescription',
      },
    });
  });

  test('propsText props가 잘 들어가는지 확인', () => {
    console.log(wrapper.find('.at-description').text());
    expect(wrapper.find('.at-description').text()).toBe('testDescription');
  });
});
