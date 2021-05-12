/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const BitReactPage = lazyLoad(
  () => import('./index'),
  module => module.BitReactPage,
  {
    fallback: <LoadingIndicator />,
  },
);
