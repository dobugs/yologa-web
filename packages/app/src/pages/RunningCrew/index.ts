import React from 'react';

const RunningCrew = React.lazy(() => import('./RunningCrew'));

export * from './Detail';
export { RunningCrew };
export { default as RunningCrewCreate } from './Create';
