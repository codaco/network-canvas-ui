import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import RichText from '../src/components/RichText';
import '../src/styles/_all.scss';

const initialValue = '## Some example markdown\nHere\'s some bold text';

export default { title: 'RichText' };

export const Plain = () => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    action('onChange');
  };

  return <RichText value={value} onChange={handleChange} />;

  // return (
  //   <Harness
  //     value={value}
  //     onChange={handleChange}
  //   >
  //     {props => (
  //       <RichText {...props} />
  //     )}
  //   </Harness>
  // );
};
