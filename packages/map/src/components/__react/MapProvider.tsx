import { MAP_PROVIDER } from 'lib/constants';
import { createContext, PropsWithChildren, useContext } from 'react';
import { ILoaderOptions } from 'types';

interface Props extends PropsWithChildren<ILoaderOptions> {
  provider: MAP_PROVIDER;
}

const mapContext = createContext(null);

function MapProvider({ children, apiKey }: Props) {
  return <mapContext.Provider value={}>{children}</mapContext.Provider>;
}

export default MapProvider;
