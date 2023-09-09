import axios from 'axios';
import { onError, onSuccess } from './interceptors';

const userBase = axios.create({
  baseURL: process.env.REACT_APP_DOBUGS_USER_API_URL,
});

const yologaBase = axios.create({
  baseURL: process.env.REACT_APP_YOLOGA_API_URL,
});

userBase.interceptors.response.use(onSuccess, onError);
yologaBase.interceptors.response.use(onSuccess, onError);

export * as AuthAPI from './auth';
export * as MemberAPI from './member';
export * as RunningCrewAPI from './running-crew';

export { userBase, yologaBase };
