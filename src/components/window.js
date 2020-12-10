import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import windowRootConsumer from './windowRootConsumer';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

/*
 * HOC which will cause a component to be rendered outside of the main ReactDOM hierachy,
 * useful for modals and other windowed components.
 */
const window = (WrappedComponent, defaultRoot = document.body) =>
  class Window extends Component {
    static get displayName() {
      return `Window(${getDisplayName(WrappedComponent)})`;
    }

    static propTypes = {
      windowRoot: PropTypes.any,
    };

    static defaultProps = {
      windowRoot: null,
    }

    render() {
      const portal = this.props.windowRoot || defaultRoot;

      return ReactDOM.createPortal(
        <WrappedComponent {...this.props} />,
        portal,
      );
    }
  };

export { window };

export default windowRootConsumer(window);
