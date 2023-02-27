import { getQueryKeys } from '@common/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthAPI } from 'api';
import { KEY } from './key';
import { useLogout as useHandleLogout } from 'components/login';

function useLogout() {
  const { handleLogout } = useHandleLogout();
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, status, data } = useMutation(() => AuthAPI.logout(), {
    onSettled() {
      queryClient.invalidateQueries(getQueryKeys(KEY).all);
      handleLogout();
    },
  });

  return {
    mutate,
    mutateAsync,
    status,
    data,
  };
}

export default useLogout;
