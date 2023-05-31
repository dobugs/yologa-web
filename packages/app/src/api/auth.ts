import { userBase } from './';
import qs from 'query-string';
import { IAuth, IReqOAuth, IReqParamsOAuthToken, IResOAuthLink } from 'types/auth';
import axios from 'axios';

const PATH = '/api/v1';

/**
 * OAuth2.0 로그인 URL 요청
 * [API 문서]{@link https://api.dev.dobugs.co.kr/docs/auth.html#_oauth2_0_%EB%A1%9C%EA%B7%B8%EC%9D%B8_url_%EC%9A%94%EC%B2%AD}
 * @param provider
 * @param redirect_url
 * @param referrer
 */
const login = ({ provider, redirect_url, referrer }: IReqOAuth) => {
  const query = qs.stringify({
    provider,
    redirect_url,
    referrer,
  });

  const path = `${PATH}/oauth2/login?${query}`;
  return userBase.get<IResOAuthLink>(path);
};

const token = ({ provider, redirect_url, referrer, authorizationCode }: IReqParamsOAuthToken) => {
  const query = qs.stringify({
    provider,
    redirect_url,
    referrer,
  });

  const path = `${PATH}/oauth2/login?${query}`;

  return userBase.post<IAuth>(path, { authorizationCode });
};

const logout = () => {
  const path = `${PATH}/oauth2/logout`;
  return userBase.post<unknown>(path);
};

const refresh = (refreshToken: string) => {
  const path = `${process.env.REACT_APP_DOBUGS_USER_API_URL}${PATH}/oauth2/reissue`;

  return axios.post<IAuth>(path, null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};

export { login, logout, token, refresh };
