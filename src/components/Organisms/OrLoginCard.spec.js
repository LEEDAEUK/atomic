import { mount } from '@vue/test-utils';
import OrLoginCard from './OrLoginCard.vue';

describe('OrLoginCard.vue', () => {
  test('어카운트 입력 안했을 시 에러메세지 확인', async () => {
    const wrapper = mount(OrLoginCard, {
      data() {
        return {
          account: '',
        };
      },
    });
    await wrapper.vm.userLogin();

    expect(wrapper.find('.at-error-message > div').text()).toBe(
      '어카운트를 입력해주세요',
    );
  });

  test('비밀번호 입력 안했을 시 에러메세지 확인', async () => {
    const wrapper = mount(OrLoginCard, {
      data() {
        return {
          account: 'dleodnr',
        };
      },
    });
    await wrapper.vm.userLogin();

    expect(wrapper.find('.at-error-message > div').text()).toBe(
      '패스워드를 입력해주세요',
    );
  });

  test('둘다 입력시 에러 메세지 없는지', async () => {
    const wrapper = mount(OrLoginCard, {
      data() {
        return {
          account: 'dleodnr',
          password: '1234',
        };
      },
    });
    await wrapper.vm.userLogin();

    expect(wrapper.find('.at-error-message > div').text()).toBe('');
  });
});
