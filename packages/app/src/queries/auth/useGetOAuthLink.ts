import { getQueryKeys } from '@common/utils';
import { KEY } from './key';
import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from 'api';
import { IReqOAuth } from 'types/auth';

function useGetOAuthLink(params: IReqOAuth) {
  return useQuery(getQueryKeys(KEY).details(), () => AuthAPI.login(params), {
    enabled: false,
    staleTime: 0,
  });
}

export default useGetOAuthLink;
