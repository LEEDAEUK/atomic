import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance(needToken) {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance, needToken);
}

export { createInstance };
