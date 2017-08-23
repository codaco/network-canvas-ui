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

  const inputLabelClassName = cx({
    input__label: true,
    'input__label--active': meta.active,
  });

  const showPlaceholder = (meta.active || meta.dirty) ? placeholder : null;

  return (
    <div className="input__container">
      <input
        className={cx(['input', className])}
        autoComplete="off"
        type={isNumericOnly ? 'number' : 'text'}
        placeholder={showPlaceholder}
        {...rest}
        {...input}
      />
      <InputLabel
        active={meta.active}
        name={input.name}
        label={label}
        className={inputLabelClassName}
        errorText={meta.error}
      />
    </div>
  );
};

export default TextInput;
