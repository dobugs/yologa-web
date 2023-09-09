import { GeolocationStatusType, PositionType } from '@common/utils/hooks';
import type { IPosition } from '@common/map';

interface ISearch {
  center: IPosition | null;
  value: string;
  isCurrent?: boolean;
}

interface IWatch {
  status: GeolocationStatusType;
  position: PositionType | null;
}

export type { IPosition, ISearch, IWatch };
