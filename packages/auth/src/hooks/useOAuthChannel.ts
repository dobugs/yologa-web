import { MutableRefObject, useCallback, useState } from 'react';
import { IReqParamsOAuthToken, IResOAuthToken } from 'types';
import { hydrateIframe } from '@common/utils';

type ReqParamsType = Omit<IReqParamsOAuthToken, 'authorizationCode'>;

const getParams = (): ReqParamsType | null => {
  const reqParamsRaw = window.localStorage.getItem('@dobugs/auth');
  if (!reqParamsRaw) return null;

  try {
    const { referrer, redirect_url, provider } = JSON.parse(reqParamsRaw) || {
      referrer: '',
      redirect_url: '',
      provider: '',
    };

    return {
      referrer,
      redirect_url,
      provider,
    };
  } catch (e) {
    return null;
  }
};

const redirect = (href: string) => {
  window.location.href = href;
};

const cleanup = () => {
  window.localStorage.clear();
};

interface Props {
  frameRef: MutableRefObject<HTMLIFrameElement | null>;
  token?: IResOAuthToken;
}

function useOAuthChannel({ frameRef, token }: Props) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const loadIframe = useCallback(() => {
    if (!frameRef.current) return;

    const { referrer } = getParams() as ReqParamsType;

    frameRef.current = hydrateIframe({
      iframe: frameRef.current,
      url: referrer,
    });

    frameRef.current?.addEventListener('load', _ => {
      setIsIframeLoaded(true);
    });
  }, []);

  const sendToken = (token: IResOAuthToken, origin: string) => {
    frameRef.current?.contentWindow?.postMessage(
      {
        type: 'token',
        data: { ...token },
      },
      origin,
    );
  };

  const transfer = useCallback(async () => {
    if (!token) throw Error('유효한 토큰이 존재하지 않습니다');

    const params = getParams() as ReqParamsType;
    const referrerURL = new URL(params.referrer);

    sendToken(token, referrerURL.href);
    cleanup();
    setTimeout(() => redirect(referrerURL.href), 100);
  }, [token]);

  return { redirect, loadIframe, isIframeLoaded, transfer };
}

export { getParams };
export default useOAuthChannel;
