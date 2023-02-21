import { userBase } from './';
import qs from 'query-string';
import { IReqOAuth, IResOAuthLink } from 'types/auth';

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

export { login };
