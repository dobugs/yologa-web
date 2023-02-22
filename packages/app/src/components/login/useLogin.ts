import { useEffect, useState } from 'react';
import { PROVIDER, REDIRECT_URL } from 'data/oauth';
import { AuthQuery } from 'queries';
import qs from 'query-string';

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

const getOAuthOptions = (provider: ProviderType | null) => ({
  provider: provider ?? '',
  redirect_url: REDIRECT_URL[provider as ProviderType] ?? '',
  referrer: `${window.location.href}?${qs.stringify({ provider })}`,
});

function useLogin() {
  const [provider, setProvider] = useState<ProviderType | null>(null);

  const { data, refetch, status, isFetching, error } = AuthQuery.useGetOauthLink(getOAuthOptions(provider));

  const login = (pv: ProviderType) => {
    setProvider(pv);
  };

  useEffect(() => {
    if (provider) {
      refetch();
    }
  }, [provider]);

  useEffect(() => {
    if (data?.data.oauthLoginLink) {
      window.location.href = data!.data.oauthLoginLink;
      window.sessionStorage.setItem('@yologa/oauth-params', JSON.stringify(getOAuthOptions(provider)));
    }
  }, [data]);

  return {
    data,
    login,
    status,
    isFetching,
    provider,
    getOAuthOptions,
    error,
  };
}

export default useLogin;
