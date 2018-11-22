import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import big from './utils/big';

/**
 * Ideally this would be a variation on the Text input, but we need different attributes,
 * could use spread?
 */
class NumberInput extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    fieldLabel: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    hidden: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
  };

  static defaultProps = {
    input: {},
    meta: {},
    autoFocus: false,
    label: null,
    fieldLabel: null,
    placeholder: '',
    className: '',
    hidden: false,
    min: null,
    max: null,
    step: 1,
    buttons: false,
  };

  componentWillMount() {
    this.id = uuid();
  }

  get step() {
    return parseFloat(this.props.step, 10);
  }

  get value() {
    return parseFloat(this.props.input.value || 0, 10);
  }

  handleStepUp = () => {
    const { input: { onChange }, max } = this.props;

    const nextValue = big(this.value).add(this.step);

    if (max && nextValue > max) { return; }
    onChange(nextValue);
  }

  handleStepDown = () => {
    const { input: { onChange }, min } = this.props;

    const nextValue = big(this.value).subtract(this.step);

    if (min && nextValue < min) { return; }
    onChange(nextValue);
  }

  render() {
    const {
      input,
      meta: { error, active, invalid, touched },
      label,
      placeholder,
      fieldLabel,
      className,
      min,
      max,
      step,
      buttons,
      autoFocus,
      hidden,
    } = this.props;

    const seamlessClasses = cx(
      className,
      'form-field',
      'form-field-text',
      {
        'form-field-text--has-focus': active,
        'form-field-text--has-error': invalid && touched && error,
      },
    );

    return (
      <div className="form-field-container" hidden={hidden}>
        {
          (fieldLabel || label) ?
            (<h4>
              {fieldLabel || label || ''}
            </h4>)
            : ''
        }
        <div className={seamlessClasses}>
          <div>
            { buttons && <button type="button" onClick={this.handleStepDown}> - </button> }
            <input
              id={this.id}
              className="form-field-text__input"
              placeholder={label || placeholder}
              autoFocus={autoFocus} // eslint-disable-line
              type="number"
              min={min}
              max={max}
              step={step}
              {...input}
            />
            { buttons && <button type="button" onClick={this.handleStepUp}> + </button> }
          </div>
          {invalid && touched && <p className="form-field-text__error">{error}</p>}
        </div>
      </div>

    );
  }
}

export default NumberInput;
