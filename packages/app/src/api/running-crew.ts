import { yologaBase } from './';
import qs from 'query-string';
import { ListResponse, Paging } from 'types/network';
import { RunningCrew } from '../types/running-crews';

const PATH = '/api/v1/running-crews';

const getHosted = ({ page, size, status }: Paging & { status: string }) => {
  const query = qs.stringify({
    page,
    size,
    status,
  });

  return yologaBase.get<ListResponse<RunningCrew>>(`${PATH}/hosted?${query}`);
};

const getParticipated = ({ page, size, status }: Paging & { status: string }) => {
  const query = qs.stringify({
    page,
    size,
    status,
  });

  return yologaBase.get<ListResponse<RunningCrew>>(`${PATH}/participated?${query}`);
};

export { getHosted, getParticipated };
