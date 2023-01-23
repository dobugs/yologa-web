import React from 'react';
import { CommonComponent } from 'components';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <CommonComponent.Header />
      <main>
        <section>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
      <footer />
    </>
  );
}

export default Main;
