import React from 'react';

import { MAP_PROVIDER, MapProvider } from '@common/map';
import { PropsWithChildren } from 'react';

function GoogleMapProvider({ children }: PropsWithChildren) {
  return (
    <MapProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
      provider={MAP_PROVIDER.GOOGLE}
      libraries={['geometry', 'places', 'drawing']}
    >
      {children}
    </MapProvider>
  );
}

export default GoogleMapProvider;
