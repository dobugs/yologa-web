import { getQueryKeys } from '@common/utils';
import { useQuery } from '@tanstack/react-query';
import { MemberAPI } from 'api';
import { useRecoilValue } from 'recoil';
import { authState } from 'stores/auth';
import { ME_KEY } from './key';

function useGetProfile() {
  const auth = useRecoilValue(authState);

  return useQuery(getQueryKeys(ME_KEY).all, () => MemberAPI.getMe(), {
    enabled: !!auth.accessToken,
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  });
}

export default useGetProfile;
