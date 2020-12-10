import React, { useContext } from 'react';
import { WindowRootContext } from './windowRootProvider';

const windowRootConsumer = WrappedComponent =>
  (props) => {
    const { windowRoot, setWindowRoot } = useContext(WindowRootContext);

    return (
      <WrappedComponent
        {...props}
        windowRoot={windowRoot}
        setWindowRoot={setWindowRoot}
      />
    );
  };

export default windowRootConsumer;
