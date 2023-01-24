import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, Global } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import { theme, global } from 'styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <>
    <Global styles={global} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
