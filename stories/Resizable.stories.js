/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';
import Resizable from '../src/components/Resizable';

export default {
  title: 'Components/Resizable',
};

const Template = ({ ...args }) => {
  const props = {
    ...args,
  };

  return (
    <>
      <Resizable {...props}><h1>Here is my content</h1></Resizable>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
