import { useMapProvider } from '@common/map/src/hooks';
import { RunningCrewComponent } from 'components';
import React from 'react';
import { Page } from 'components/common';

function RunningCrew() {
  const { api } = useMapProvider();

  return <Page content={<RunningCrewComponent.Map api={api as typeof window.google} />} />;
}

export default RunningCrew;
