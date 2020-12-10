import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { WindowRootContext } from './windowRootProvider';

const window = (WrappedComponent, defaultRoot = document.body) =>
  (props) => {
    const { windowRoot, setWindowRoot } = useContext(WindowRootContext);

    const portal = windowRoot || defaultRoot;

    return ReactDOM.createPortal(
      (
        <WrappedComponent
          {...props}
          windowRoot={windowRoot}
          setWindowRoot={setWindowRoot}
        />
      ),
      portal,
    );
  };

export { window };

export default window;
