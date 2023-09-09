import { useQuery } from '@tanstack/react-query';
import { getQueryKeys } from '@common/utils';
import { PARTICIPATED } from './keys';
import { Paging } from '../../types/network';
import { RunningCrewAPI } from 'api';
import { useMemo } from 'react';

const STATUS = 'CREATED' as const;

function useGetParticipatedList({ page, size }: Paging) {
  const queryData = useQuery(
    getQueryKeys(PARTICIPATED).list({ page, size, status: STATUS }),
    () => RunningCrewAPI.getParticipated({ page, size, status: STATUS }),
    {
      select: res => res.data,
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

export default useGetParticipatedList;
