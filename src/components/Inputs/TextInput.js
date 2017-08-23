/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import InputLabel from './InputLabel';

const TextInput = ({
  input,
  meta,
  className,
  label,
  isNumericOnly,
  placeholder,
  ...rest
}) => {

  const activeOrHasValue = meta.active || !!input.value;
  const errorText = meta.touched && meta.invalid && meta.error;

  const inputLabelClassName = cx({
    input__label: true,
    'input__label--active': meta.active,
  });

  return (
    <div className="input__container">
      <input
        className={cx(['input', className])}
        autoComplete="off"
        type={isNumericOnly ? 'number' : 'text'}
        placeholder={meta.active ? placeholder : null}
        {...rest}
        {...input}
      />
      <InputLabel
        active={activeOrHasValue}
        name={input.name}
        label={label}
        className={inputLabelClassName}
        errorText={errorText}
      />
    </div>
  );
};

export default TextInput;
