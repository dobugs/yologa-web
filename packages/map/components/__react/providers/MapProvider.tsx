import React from 'react';
import { MAP_PROVIDER } from '../../../lib/constants';
import Loader from '../../../lib/Loader';
import { createContext, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { ILoaderOptions, IMapContext } from 'types';

interface Props extends PropsWithChildren<ILoaderOptions> {
  provider: MAP_PROVIDER;
  libraries: string | string[];
}

const mapContext = createContext<unknown>(null);

const PROVIDER_API: Record<MAP_PROVIDER, unknown> = {
  GOOGLE: typeof window.google,
};

function MapProvider({ provider, children, apiKey, libraries }: Props) {
  const [api, setApi] = useState<unknown>(null);

  const loader = useRef(
    new Loader(provider, {
      apiKey,
      version: 'weekly',
      libraries,
    }),
  );

  useEffect(() => {
    loader.current.load().then(_ => {
      setApi(PROVIDER_API[provider]);
    });
  }, []);

  return <mapContext.Provider value={api}>{children}</mapContext.Provider>;
}

export { mapContext };
export default MapProvider;
