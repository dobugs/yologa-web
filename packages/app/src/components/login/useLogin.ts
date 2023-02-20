import { useCallback, useEffect, useState } from 'react';
import { PROVIDER, REDIRECT_URL } from 'data/oauth';
import { UserQuery } from 'queries';
import qs from 'query-string';

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

function useLogin() {
  const [isAuth] = useState(!!window.localStorage.getItem('@yologa/auth'));

  const [provider, setProvider] = useState<ProviderType | null>(null);

  const getOAuthOptions = useCallback(() => {
    return {
      provider: provider ?? '',
      redirect_url: REDIRECT_URL[provider as ProviderType] ?? '',
      referrer: `${window.location.href}?${qs.stringify({ provider })}`,
    };
  }, [provider]);

  const { data, refetch, status, isFetching } = UserQuery.useGetOauthLink(getOAuthOptions());

  const login = useCallback((provider: ProviderType) => {
    setProvider(provider);
  }, []);

  useEffect(() => {
    if (provider) {
      refetch();
    }
  }, [provider]);

  const openLoginLink = () => {
    if (data?.data.oauthLoginLink) {
      window.location.href = data!.data.oauthLoginLink;
    }
  };

  return {
    data,
    login,
    status,
    isFetching,
    provider,
    getOAuthOptions,
    openLoginLink,
    isAuth,
  };
}

export default useLogin;
