interface IReqParamsOAuthToken {
  provider: string;
  redirect_url: string;
  referrer: string;
  authorizationCode: string;
}

interface IResOAuthToken {
  accessToken: string;
  refreshToken: string;
}

export type { IReqParamsOAuthToken, IResOAuthToken };
