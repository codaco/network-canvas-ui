/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Harness from './helpers/Harness';
import Skeleton from '../src/components/Skeleton';
import '../src/styles/_all.scss';

const requiredProps = {
};

export default { title: 'Utilities/Skeleton' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {(props) => <Skeleton {...props} />}
  </Harness>
);

export const multilines = () => (
  <Harness
    requiredProps={requiredProps}
    count={5}
  >
    {(props) => <Skeleton {...props} />}
  </Harness>
);

export const circle = () => (
  <Harness
    requiredProps={requiredProps}
    width="4rem"
    height="4rem"
    circle
    count={10}
  >
    {(props) => <Skeleton {...props} />}
  </Harness>
);
