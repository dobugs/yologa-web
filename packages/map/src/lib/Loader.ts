import { MAP_PROVIDER } from 'lib/constants';
import { IScriptLoader } from 'types';
import GoogleMapLoader from './GoogleLoader';

interface ILoaderOptions {
  apiKey: string;
  [propName: string]: unknown;
}

class Loader {
  private static variants = {
    GOOGLE: GoogleMapLoader,
  } as const;

  public readonly loader: IScriptLoader;

  public readonly provider: MAP_PROVIDER;

  public readonly options: ILoaderOptions;

  constructor(provider: MAP_PROVIDER, options: ILoaderOptions) {
    this.provider = provider;
    this.options = options;

    const { apiKey, ...restOptions } = this.options;

    this.loader = new Loader.variants[this.provider](apiKey, restOptions);
  }

  load = () => {
    return this.loader.load();
  };
}

export default Loader;
