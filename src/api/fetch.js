import { createInstance } from './index';

function fetchUserList() {
  // throw new Error('.');
  return createInstance(false).get('/api/users?page=2');
}

function fetchUser(id) {
  // throw new Error('.');
  return createInstance(false).get(`/api/users/${id}`);
}

export { fetchUserList, fetchUser };
