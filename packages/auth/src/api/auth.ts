import { OAUTH_PROVIDER } from 'types/oauth';
import { base } from './';
import qs from 'query-string';

const PATH = '/api/v1';

const login = (provider: OAUTH_PROVIDER, redirect_url: string, authorizationCode: string) => {
  const query = qs.stringify({
    provider,
    redirect_url,
  });

  const path = `${PATH}/oauth2/login?${query}`;

  return base.post(path, { authorizationCode });
};

export { login };
