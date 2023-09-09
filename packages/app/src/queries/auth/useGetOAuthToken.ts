import { getQueryKeys } from '@common/utils';
import { KEY } from './key';
import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from 'api';
import { IReqOAuth, IReqParamsOAuthToken } from 'types/auth';
import { PROVIDER } from 'data/oauth';

const getParams = (): IReqOAuth => {
  const defaultValue = {
    referrer: '',
    redirect_url: '',
    provider: '',
  };

  const reqParamsRaw = window.sessionStorage.getItem('@yologa/oauth-params');
  if (!reqParamsRaw) return defaultValue;

  try {
    const { referrer, redirect_url, provider } = JSON.parse(reqParamsRaw) || defaultValue;

    return {
      referrer,
      redirect_url,
      provider,
    };
  } catch (e) {
    return defaultValue;
  }
};

function useGetOAuthToken({ authorizationCode }: Pick<IReqParamsOAuthToken, 'authorizationCode'>) {
  const params = { ...getParams(), authorizationCode };

  const { status, refetch, data, error, failureCount } = useQuery(
    getQueryKeys(KEY).details(),
    () => AuthAPI.token(params),
    {
      staleTime: 0,
      enabled: params.provider in PROVIDER && !!params.authorizationCode,
      retry: 3,
    },
  );

  return {
    data: data?.data,
    status,
    refetch,
    error,
    failureCount,
  };
}

export default useGetOAuthToken;
