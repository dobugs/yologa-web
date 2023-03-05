import { SetStateAction } from 'react';
import { WithRequired } from '@common/utils';
interface ILoaderOptions {
  apiKey: string;
}

interface IMapContext {
  api: unknown;
  setApi: SetStateAction<unknown>;
}

interface IScriptLoader extends ILoaderOptions {
  options: Record<string, unknown>;
  load: () => Promise<unknown>;
}

type MapOptionsType = WithRequired<google.maps.MapOptions, 'center' | 'zoom'>;

export type { MapOptionsType, IScriptLoader, ILoaderOptions, IMapContext };
