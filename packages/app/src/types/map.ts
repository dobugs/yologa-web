import { GeolocationStatusType, PositionType } from '@common/utils/hooks';

interface IPosition {
  lat: number;
  lng: number;
}

interface ISearch {
  center: IPosition | null;
  value: string;
  isCurrent?: boolean;
}

interface IWatch {
  watchId: number | null;
  status: GeolocationStatusType;
  position: PositionType | null;
}

export type { IPosition, ISearch, IWatch };
