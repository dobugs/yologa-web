import { OAUTH_PROVIDER } from 'data/oauth';
import { authBase } from './';
import qs from 'query-string';

const PATH = '/api/v1';

const login = (provider: OAUTH_PROVIDER, redirect_url: string) => {
  const query = qs.stringify({
    provider,
    redirect_url,
  });

  const path = `${PATH}/oauth2/login?${query}`;
  return authBase.get(path);
};

export { login };
