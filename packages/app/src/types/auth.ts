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

export type { IAuth, IReqOAuth, IResOAuthLink, ProviderType };
