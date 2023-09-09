import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, Global } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import { theme, global } from 'styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from 'components/providers';

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
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
