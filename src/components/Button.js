import React, { Component } from 'react';
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

class Button extends Component {
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
    className: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    content: '',
    children: null,
    icon: '',
    iconPosition: 'right',
    size: '',
    color: '',
    onClick: () => {},
  }

  render() {
    const {
      className,
      color,
      size,
      children,
      content,
      onClick,
      icon,
      iconPosition,
      ...rest
    } = this.props;

    const buttonClassNames = cx({
      className,
      button: true,
      [`button--${color}`]: !!color,
      [`button--${size}`]: !!size,
    });

    return (
      <button className={buttonClassNames} onClick={onClick} {...rest}>
        {renderButtonIcon({ icon, iconPosition })}
        <span className="button__content">{children || content}</span>
      </button>
    );
  }
}

export default Button;
