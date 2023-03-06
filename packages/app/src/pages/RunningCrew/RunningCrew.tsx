import { RunningCrewComponent } from 'components';
import { Helmet } from 'react-helmet';
import React from 'react';

function RunningCrew() {
  return (
    <>
      <Helmet>
        <title>러닝 크루 :: 러닝할 땐 욜로가!</title>
        <meta name="theme-color" content="#fef9ec" />
      </Helmet>
      <RunningCrewComponent.Container />
    </>
  );
}

export default RunningCrew;
