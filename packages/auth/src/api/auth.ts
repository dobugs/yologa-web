import { IReqParamsOAuthToken, IResOAuthToken } from 'types/oauth';
import { base } from './';
import qs from 'query-string';

const PATH = '/api/v1';

const login = ({ provider, redirect_url, referrer, authorizationCode }: IReqParamsOAuthToken) => {
  const query = qs.stringify({
    provider,
    redirect_url,
    referrer,
  });

  const path = `${PATH}/oauth2/login?${query}`;

  return base.post<IResOAuthToken>(path, { authorizationCode });
};

export { login };
