import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Harness from './helpers/Harness';
import RichText from '../src/components/RichText';
import '../src/styles/_all.scss';

const initialValue = `
# A title to start
## A subtitle
Here's *some* **bold** ***text***
[A link](http://www.example.com)
`;

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
