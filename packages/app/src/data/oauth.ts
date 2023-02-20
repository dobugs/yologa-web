const PROVIDER = {
  google: 'google',
  kakao: 'kakao',
} as const;

const REDIRECT_URL = {
  google: `${process.env.REACT_APP_DOBUGS_AUTH_WEB}/callback/google`,
  kakao: `${process.env.REACT_APP_DOBUGS_AUTH_WEB}/callback/kakao`,
} as const;

export { PROVIDER, REDIRECT_URL };
