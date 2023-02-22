import { getQueryKeys } from '@common/utils';
import { KEY } from './key';
import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from 'api';
import { IReqParamsOAuthToken } from 'types/oauth';
import { PROVIDER } from 'data/oauth';

function useGetOAuthToken(params: IReqParamsOAuthToken) {
  const { status, refetch, data } = useQuery(getQueryKeys(KEY).details(), () => AuthAPI.login(params), {
    staleTime: 0,
    enabled: params.provider in PROVIDER && !!params.authorizationCode,
  });

  return {
    data: data?.data,
    status,
    refetch,
  };
}

export default useGetOAuthToken;
