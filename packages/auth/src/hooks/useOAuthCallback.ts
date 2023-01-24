import { OAUTH_PROVIDER } from 'types/oauth';

function useOAuthCallback(pv: unknown) {
  if ((pv as string) in OAUTH_PROVIDER) {
    throw Error('올바른 OAuth 공급자가 아닙니다.');
  }

  const onSuccess = () => {
    // onSuccess
  };

  return {
    onSuccess,
  };
}

export default useOAuthCallback;
