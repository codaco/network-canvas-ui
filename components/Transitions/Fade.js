import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

class Fade extends PureComponent {
  defaultDuration = {
    enter: 100,
    exit: 100,
  };

  defaultEasing = getCSSVariableAsObject('--animation-easing-js');

  render() {
    const { children, customDuration, customEasing, enter } = this.props;

    const duration = customDuration || this.defaultDuration;
    const easing = customEasing || this.defaultEasing;

    return (
      <Transition
        timeout={duration}
        onEnter={
          (el) => {
            anime({
              targets: el,
              opacity: [0, 1],
              elasticity: 0,
              easing,
              duration: duration.enter,
            });
          }
        }
        onExit={
          (el) => {
            anime({
              targets: el,
              opacity: [1, 0],
              elasticity: 0,
              easing,
              duration: duration.exit,
            });
          }
        }
        enter={enter}
        in={this.props.in}
        appear
        unmountOnExit
      >
        { children }
      </Transition>
    );
  }
}

Fade.propTypes = {
  children: PropTypes.any,
  customDuration: PropTypes.object,
  customEasing: PropTypes.array,
  enter: PropTypes.bool,
  in: PropTypes.bool.isRequired,
};

Fade.defaultProps = {
  children: null,
  customDuration: null,
  customEasing: null,
  enter: true,
};

export default Fade;
