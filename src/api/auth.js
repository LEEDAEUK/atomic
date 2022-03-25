import { createInstance } from './index';

function loginUser(userData) {
  return createInstance(false).post('/api/login', userData);
}

export { loginUser };
