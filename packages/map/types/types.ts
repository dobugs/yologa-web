interface ILoaderOptions {
  apiKey: string;
}

interface IMapContext {
  loaded: boolean;
}

interface IScriptLoader extends ILoaderOptions {
  options: Record<string, unknown>;
  load: () => Promise<unknown>;
}

export type { IScriptLoader, ILoaderOptions, IMapContext };
