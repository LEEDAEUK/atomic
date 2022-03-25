import { shallowMount } from '@vue/test-utils';
import AtImage from './AtImage.vue';

describe('AtImage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AtImage, {
      propsData: {
        propsImageName: 'icon.png',
      },
    });
  });

  test('이미지 컴포넌트의 src에 경로가 잘 들어가는지 확인 ', async () => {
    console.log(wrapper.find('.at-image').attributes().src);
    expect(wrapper.find('.at-image').attributes().src).toBe('icon.png');
  });
});
