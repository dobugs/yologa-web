import React from 'react';

const Authorize = React.lazy(() => import('./Authorize'));
const UnAuthorize = React.lazy(() => import('./UnAuthorize'));

export { default as Base } from './Base';
export { default as Main } from './Main';
export { default as Layout } from './Layout';

export { Authorize, UnAuthorize };
