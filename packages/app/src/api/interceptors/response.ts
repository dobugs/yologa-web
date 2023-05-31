import { AuthAPI, userBase, yologaBase } from 'api';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAuth } from 'types/auth';
import { produce } from 'immer';

interface IAxiosRetryRequestConfig extends AxiosRequestConfig {
  _yologaRetry?: boolean;
}

const logout = () => {
  window.localStorage.removeItem('@yologa/auth');
  userBase.defaults.headers.common['authorization'] = '';
  yologaBase.defaults.headers.common['authorization'] = '';

  window.location.href = '/';
};

const login = (data: IAuth) => {
  window.localStorage.setItem('@yologa/auth', JSON.stringify(data));
  userBase.defaults.headers.common['authorization'] = data.accessToken;
  yologaBase.defaults.headers.common['authorization'] = data.accessToken;
};

const getRefreshToken = () => {
  const raw = window.localStorage.getItem('@yologa/auth') ?? '';

  try {
    const parsed = JSON.parse(raw) as IAuth;
    return parsed.refreshToken;
  } catch (e) {
    return '';
  }
};

const onSuccess = (res: AxiosResponse) => res;

const onError = async (err: AxiosError) => {
  const config: IAxiosRetryRequestConfig = { ...(err.config as AxiosRequestConfig) };

  if (err.response?.status === 401 && !config._yologaRetry) {
    config._yologaRetry = true;

    try {
      const { data } = await AuthAPI.refresh(getRefreshToken());
      login(data);

      const headers = produce(config.headers ?? {}, draft => {
        draft.Authorization = `Bearer ${data.accessToken}`;
      });

      config.headers = headers;

      return axios(config);
    } catch (e) {
      logout();

      return Promise.reject(e);
    }
  }

  return Promise.reject(err);
};

export { onSuccess, onError };
