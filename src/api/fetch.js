import { createInstance } from './index';

function fetchUserList() {
  // throw new Error('.');
  return createInstance(false).get('/api/users?page=2');
}

export { fetchUserList };
