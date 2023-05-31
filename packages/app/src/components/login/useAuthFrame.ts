import { MutableRefObject, useEffect, useState } from 'react';
import { REDIRECT_URL } from 'data/oauth';
import { IReqOAuth, ProviderType } from 'types/auth';
import { hydrateIframe } from '@common/utils';

interface Props {
  provider: ProviderType | null;
  frameRef: MutableRefObject<HTMLIFrameElement | null>;
}

function useAuthFrame({ provider, frameRef }: Props) {
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);

  useEffect(() => {
    if (provider && frameRef.current) {
      frameRef.current = hydrateIframe({ iframe: frameRef.current, url: REDIRECT_URL[provider]! });
      frameRef.current.addEventListener('load', _ => {
        setTimeout(() => {
          setIsFrameLoaded(true);
        }, 100);
      });
    }
  }, [provider]);

  const remove = () => {
    frameRef.current?.remove();
    frameRef.current = null;
  };

  const sendOAuthReqParams = (params: IReqOAuth) => {
    if (!isFrameLoaded) throw Error('iframe이 로드되지 않았습니다.');

    frameRef.current?.contentWindow?.postMessage(
      {
        type: 'deploy',
        data: params,
      },
      new URL(process.env.REACT_APP_DOBUGS_AUTH_WEB!).origin,
    );
  };

  return {
    sendOAuthReqParams,
    isFrameLoaded,
    remove,
  };
}

export default useAuthFrame;
