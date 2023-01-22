import { Callback } from 'pages';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path={'callback'} element={<Callback />} />

          {/* 404 */}
          <Route path={'*'} element={<>몰라요</>} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
