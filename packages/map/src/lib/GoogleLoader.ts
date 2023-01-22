import { IScriptLoader } from 'types';
import { Loader as _mapLoader } from '@googlemaps/js-api-loader';

class GoogleMapLoader implements IScriptLoader {
  apiKey: string;

  options: IScriptLoader['options'];

  private loader: _mapLoader;

  constructor(apiKey: string, options: IScriptLoader['options']) {
    this.apiKey = apiKey;
    this.options = options;

    this.loader = new _mapLoader({
      apiKey: this.apiKey,
      ...options,
    });
  }

  load = () => {
    return this.loader.load();
  };
}

export default GoogleMapLoader;
