import React, { ComponentType, createContext } from 'react';

import { MAP_PROVIDER, MapProvider } from '@common/map';
import { PropsWithChildren } from 'react';

import { Props } from 'components/GoogleMap';

const cachedGoogleMapContext = createContext<ComponentType<Props> | null>(null);

function GoogleCachedMapProvider({ children }: PropsWithChildren) {
  return (
    <MapProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
      provider={MAP_PROVIDER.GOOGLE}
      libraries={['geometry', 'places', 'drawing']}
    >
      {children}
      {/*<cachedGoogleMapContext.Provider value={<GoogleMap />}>{children}</cachedGoogleMapContext.Provider>*/}
    </MapProvider>
  );
}

export { cachedGoogleMapContext };
export default GoogleCachedMapProvider;
