import { AuthAPI, userBase, yologaBase } from 'api';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAuth } from 'types/auth';

interface IAxiosRetryRequestConfig extends AxiosRequestConfig {
  _yologaRetry?: boolean;
}

const ERROR_MESSAGE = {
  TOKEN_EXPIRED: '토큰의 만료 시간이 지났습니다.',
} as const;

const logout = () => {
  window.localStorage.removeItem('@yologa/auth');
  userBase.defaults.headers.common['authorization'] = '';
  yologaBase.defaults.headers.common['authorization'] = '';

  window.history.replaceState(null, '', '/');
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

  if (
    err.response?.status === 400 &&
    (err.response as AxiosResponse).data.message === ERROR_MESSAGE.TOKEN_EXPIRED &&
    !config._yologaRetry
  ) {
    config._yologaRetry = true;

    try {
      const { data } = await AuthAPI.refresh(getRefreshToken());

      config.headers.common?.set('Auhtorization', `Bearer ${data.accessToken}`);

      return axios(config).then(_ => login(data));
    } catch (e) {
      logout();
    }
  }
};

export { onSuccess, onError };
