import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import RichText from '../src/components/RichText';
import '../src/styles/_all.scss';

const initialValue = '## Some example markdown\nHere\'s some bold text';

export default { title: 'RichText' };

export const WithError = () => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    action('onChange')(newValue);
  };

  return <RichText value={value} onChange={handleChange} />;

  // return (
  //   <Harness
  //     requiredProps={requiredProps}
  //     meta={renderMeta}
  //   >
  //     {props => (
  //       <RichText {...props} />
  //     )}
  //   </Harness>
  // );
};
