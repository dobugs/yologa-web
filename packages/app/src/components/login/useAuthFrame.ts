import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { REDIRECT_URL } from 'data/oauth';
import { IReqOAuth, ProviderType } from 'types/auth';
import { createIframe } from '@common/utils';

interface Props {
  provider: ProviderType | null;
  wrapper: MutableRefObject<HTMLDivElement | null>;
}

function useAuthFrame({ provider, wrapper }: Props) {
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (provider) {
      frameRef.current = createIframe({ wrapper: wrapper.current as HTMLDivElement, url: REDIRECT_URL[provider]! });
      frameRef.current.addEventListener('load', _ => {
        setIsFrameLoaded(true);
      });
    }
  }, [provider]);

  const remove = () => {
    frameRef.current?.remove();
    frameRef.current = null;
  };

  const setInfo = (params: IReqOAuth) => {
    const frameWindow = frameRef.current?.contentWindow;
    if (!frameWindow) return;

    frameWindow.postMessage(
      {
        type: 'deploy',
        data: params,
      },
      new URL(process.env.REACT_APP_DOBUGS_AUTH_WEB!).origin,
    );
  };

  return {
    setInfo,
    isFrameLoaded,
    remove,
  };
}

export default useAuthFrame;
