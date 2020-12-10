import React from 'react';
import { has } from 'lodash';
import PropTypes from 'prop-types';
import TextInput from './Text';

const toInt = (value) => {
  const int = parseInt(value, 10);
  if (isNaN(int)) {
    return null;
  }
  return int;
};


const NumberInput = ({ input, ...rest }) => {
  const numberInput = {
    ...input,
    onChange: e =>
      has(input, 'onChange') && input.onChange(toInt(e.target.value)),
    onBlur: e =>
      has(input, 'onBlur') && input.onBlur(toInt(e.target.value)),
  };

  return <TextInput input={numberInput} type="number" {...rest} />
};

NumberInput.propTypes = {
  input: PropTypes.object,
};

NumberInput.defaultProps = {
  input: {},
};

export default NumberInput;
