import { LayoutComponent } from 'components';
import { PATH } from 'data/pages';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutComponent.Base />}>
            <Route path={PATH.ROOT} element={<LayoutComponent.Base />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
