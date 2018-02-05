/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import colorDict from '../colorDictionary';
import InputLabel from './InputLabel';

class ToggleInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(colorDict)),
    defaultChecked: PropTypes.bool,
    errorText: PropTypes.node,
    tooltip: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onCheck: PropTypes.func,
    onFocus: PropTypes.func,
    validator: PropTypes.func,
    value: PropTypes.any,
  }

  state = {
    isChecked: false,
  }

  componentWillMount() {
    const { checked } = this.props;
    if (checked) {
      this.setState({
        isChecked: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasCheckedProp = nextProps.hasOwnProperty('checked');
    const hasNewDefaultProp =
      (nextProps.hasOwnProperty('defaultChecked') &&
      (nextProps.defaultChecked !== this.props.defaultChecked));

    if (hasCheckedProp || hasNewDefaultProp) {
      const isChecked = nextProps.checked || nextProps.defaultChecked || false;

      this.setState({ isChecked });
    }
  }

  isChecked() {
    return this.checkbox.checked;
  }

  handleCheck = (event) => {
    if (this.props.onCheck) {
      this.props.onCheck(event, this.isChecked());
    }
  }

  render() {
    const {
      checked, // eslint-disable-line
      className,
      color,
      errorText,
      tooltip,
      name,
      label,
      onCheck, // eslint-disable-line
      isChecked, // eslint-disable-line
      value,
      ...rest
    } = this.props;

    const toggleButtonClassName = cx({
      toggle__button: true,
      [`toggle__button--${color}`]: !!color,
    });

    return (
      <div className="toggle__container">
        <input
          className={cx(['toggle', className])}
          name={name}
          type="checkbox"
          ref={(checkbox) => { this.checkbox = checkbox; }}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          value={value}
          {...rest}
        />
        <div className="toggle__slider">
          <span className={toggleButtonClassName} />
        </div>
        <InputLabel
          name={name}
          label={label}
          errorText={errorText}
          tooltip={tooltip}
        />
      </div>
    );
  }
}

export default ToggleInput;
