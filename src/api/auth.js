import { createInstance } from './index';
/**
 *
 * @param {Object: 유저정보} userData
 * @returns
 */
function loginUser(userData) {
  /**
   *
   * @param {Boolean: 토큰 넣을지} createInstance
   * @returns
   */
  return createInstance(false).post('/api/login', userData);
}

export { loginUser };
