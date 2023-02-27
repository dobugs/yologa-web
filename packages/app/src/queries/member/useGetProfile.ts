import { getQueryKeys } from '@common/utils';
import { useQuery } from '@tanstack/react-query';
import { MemberAPI } from 'api';
import { ME_KEY } from './key';

function useGetProfile() {
  const { data, status, refetch } = useQuery(getQueryKeys(ME_KEY).all, () => MemberAPI.getMe(), {
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  });

  return {
    data,
    status,
    refetch,
  };
}

export default useGetProfile;
