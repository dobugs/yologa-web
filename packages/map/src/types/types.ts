import { SetStateAction } from 'react';

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

export type { IScriptLoader, ILoaderOptions, IMapContext };
