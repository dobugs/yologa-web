import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, Global } from '@emotion/react';
import { theme, global } from 'styles';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthProvider, GoogleCachedMapProvider, ToastProvider, PositionProvider } from 'components/providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

root.render(
  <>
    <Global styles={global} />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GoogleCachedMapProvider>
            <ToastProvider>
              <AuthProvider>
                <PositionProvider>
                  <App />
                </PositionProvider>
              </AuthProvider>
            </ToastProvider>
          </GoogleCachedMapProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
