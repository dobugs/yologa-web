import { useQuery } from '@tanstack/react-query';
import { getQueryKeys } from '@common/utils';
import { HOSTED } from './keys';
import { Paging } from '../../types/network';
import { RunningCrewAPI } from 'api';
import { useMemo } from 'react';

const STATUS = 'CREATED' as const;

function useGetHostedList({ page, size }: Paging) {
  const queryData = useQuery(
    getQueryKeys(HOSTED).list({ page, size, status: STATUS }),
    () => RunningCrewAPI.getHosted({ page, size, status: STATUS }),
    {
      select: data => {
        return data.data;
      },
    },
  );

  const isLoadable = useMemo(() => {
    if (!queryData.data) return false;

    const { page, size, totalElements } = queryData.data;
    return page * size < totalElements;
  }, [queryData.data]);

  return {
    ...queryData,
    isLoadable,
  };
}

export default useGetHostedList;
