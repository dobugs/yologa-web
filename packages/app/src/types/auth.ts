import { PROVIDER } from 'data/oauth';

interface IAuth {
  accessToken: string;
  refreshToken: string;
}

interface IReqOAuth {
  provider: string;
  redirect_url: string;
  referrer: string;
}

interface IResOAuthLink {
  oauthLoginLink: string;
}

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

interface IReqParamsOAuthToken extends IReqOAuth {
  authorizationCode: string;
}

export type { IAuth, IReqOAuth, IResOAuthLink, IReqParamsOAuthToken, ProviderType };
