const PROVIDER = {
  google: 'google',
  kakao: 'kakao',
} as const;

const REDIRECT_URL = {
  google: `${process.env.REACT_APP_YOLOGA_WEB}/oauth/google`,
  kakao: `${process.env.REACT_APP_YOLOGA_WEB}/oauth/kakao`,
} as const;

export { PROVIDER, REDIRECT_URL };
