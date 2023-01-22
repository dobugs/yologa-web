import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, Global } from '@emotion/react';
import { theme, global } from 'styles';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GoogleMapProvider from 'components/providers/GoogleMapProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Global styles={global} />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GoogleMapProvider>
          <App />
        </GoogleMapProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
