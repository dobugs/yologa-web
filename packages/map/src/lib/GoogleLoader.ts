import { IScriptLoader } from 'types';
import { Loader as ApiLoader } from '@googlemaps/js-api-loader';

class GoogleMapLoader implements IScriptLoader {
  apiKey: string;

  options: IScriptLoader['options'];

  private loader: ApiLoader;

  constructor(apiKey: string, options: IScriptLoader['options']) {
    this.apiKey = apiKey;
    this.options = options;

    this.loader = new ApiLoader({
      apiKey: this.apiKey,
      ...options,
    });
  }

  load = () => {
    return this.loader.load();
  };
}

export default GoogleMapLoader;
