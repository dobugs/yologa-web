import axios from 'axios';

const userBase = axios.create({
  baseURL: process.env.REACT_APP_DOBUGS_USER_API_URL,
});

const yologaBase = axios.create({
  baseURL: process.env.REACT_APP_YOLOGA_API_URL,
});

export * as AuthAPI from './auth';
export * as MemberAPI from './member';
export * as RunningCrewAPI from './running-crew';

export { userBase, yologaBase };
