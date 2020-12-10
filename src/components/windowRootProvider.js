import React, { useState } from 'react';

const WindowRootContext = React.createContext(document.body);

const windowRootProvider = WrappedComponent =>
  (props) => {
    const { windowRoot, setWindowRoot } = useState(document.body);

    return (
      <WindowRootContext.Provider value={{ windowRoot, setWindowRoot }}>
        <WrappedComponent {...props} />
      </WindowRootContext.Provider>
    );
  };

export { WindowRootContext };

export default windowRootProvider;
