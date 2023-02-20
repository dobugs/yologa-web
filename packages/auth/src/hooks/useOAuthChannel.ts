import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { IReqParamsOAuthToken, IResOAuthToken } from 'types';
import { createIframe } from '@common/utils/lib';

const handleMessage = (e: MessageEvent) => {
  const { type, data } = e.data;

  if (type === 'deploy') {
    Object.entries(data).forEach(([key, value]) => {
      window.sessionStorage.setItem(key, value as string);
    });
  }
};

const getOptions = (): Omit<IReqParamsOAuthToken, 'authorizationCode'> => {
  return {
    referrer: window.sessionStorage.getItem('referrer') ?? '',
    redirect_url: window.sessionStorage.getItem('redirect_url') ?? '',
    provider: window.sessionStorage.getItem('provider') ?? '',
  };
};

interface Props {
  wrapper: MutableRefObject<HTMLDivElement | null>;
}

function useOAuthChannel({ wrapper }: Props) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const loadIframe = (url: string) => {
    frameRef.current = createIframe({
      wrapper: wrapper.current as HTMLDivElement,
      url,
    });

    frameRef.current?.addEventListener('load', _ => {
      setIsIframeLoaded(true);
    });
  };

  const sendToken = (token: IResOAuthToken) => {
    const frameWindow = frameRef.current?.contentWindow;
    if (!frameWindow) return;

    frameWindow.postMessage(
      {
        type: 'token',
        data: { ...token },
      },
      new URL(getOptions().referrer).href,
    );
  };

  const redirect = () => {
    window.location.href = new URL(getOptions().referrer).origin;
  };

  return { redirect, loadIframe, isIframeLoaded, sendToken };
}

export { getOptions };
export default useOAuthChannel;
