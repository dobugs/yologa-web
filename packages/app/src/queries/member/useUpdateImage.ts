import { getQueryKeys } from '@common/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberAPI } from 'api';
import { ME_KEY } from './key';

function useUpdateImage() {
  const queryClient = useQueryClient();

  return useMutation(MemberAPI.updateImage, {
    onSuccess: () => {
      queryClient.invalidateQueries(getQueryKeys(ME_KEY).all);
    },
  });
}

export default useUpdateImage;
