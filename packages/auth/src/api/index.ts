import axios from 'axios';

const base = axios.create({
  baseURL: process.env.REACT_APP_DOBUGS_USER_API_URL,
});

export * as AuthAPI from './auth';
export { base };
