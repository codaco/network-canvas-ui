import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const renderButtonIcon = ({ icon, iconPosition }) => {
  const iconClassNames = cx({
    button__icon: true,
    'button__icon--right': iconPosition === 'right',
  });

  let iconElement = null;
  if (icon) {
    if (typeof icon === 'string') {
      // eslint-disable-next-line
      const Icon = require('./Icon').default;
      iconElement = <Icon name={icon} className={iconClassNames} />;
    } else {
      iconElement = React.cloneElement(
        icon,
        { className: iconClassNames },
      );
    }
  }
  return iconElement;
};

class Button extends PureComponent {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    children: PropTypes.node,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.object,
    ]),
    iconPosition: PropTypes.oneOf([
      'left', 'right',
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf([
      'button', 'submit', 'reset',
    ]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    content: '',
    children: null,
    icon: '',
    iconPosition: 'left',
    size: '',
    color: '',
    type: 'button',
    onClick: () => {},
    disabled: false,
  }

  render() {
    const {
      color,
      size,
      children,
      content,
      onClick,
      icon,
      type,
      iconPosition,
      disabled,
      ...rest
    } = this.props;

    const buttonClassNames = cx({
      button: true,
      [`button--${color}`]: !!color,
      [`button--${size}`]: !!size,
      'button--has-icon': !!icon,
    });

    return (
      <button
        type={type}
        className={buttonClassNames}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {renderButtonIcon({ icon, iconPosition })}
        <span className="button__content">
          {children || content}
        </span>
      </button>
    );
  }
}

export default Button;
