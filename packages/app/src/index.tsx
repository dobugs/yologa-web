import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';

import { MapProvider, MAP_PROVIDER } from '@common/map';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MapProvider
        apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        provider={MAP_PROVIDER.GOOGLE}
        libraries={['geometry', 'places', 'drawing']}
      >
        <App />
      </MapProvider>
    </RecoilRoot>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
