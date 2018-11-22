import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';

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
    step: null,
  };

  componentWillMount() {
    this.id = uuid();
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
          {invalid && touched && <p className="form-field-text__error">{error}</p>}
        </div>
      </div>

    );
  }
}

export default NumberInput;
