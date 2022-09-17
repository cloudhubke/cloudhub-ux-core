import React from 'react';
import appStore from './appStore';
import AppContext from './AppContext';
import { useStore } from './useAppStore';
import shallow from 'zustand/shallow';
let isSSR: boolean = true;
try {
  if (window) {
    isSSR = false;
  }
} catch (error) {}
const AppContextProvider = ({ children, INITIAL_STATE = {} }) => {
  const dispatch = useStore((state) => state.dispatch, shallow);
  const [updated, setUpdated] = React.useState(false);

  const resetState = () => {
    dispatch({
      payload: {
        ...(INITIAL_STATE || {}),
      },
    });
  };

  React.useEffect(() => {
    resetState();
    setUpdated(true);
  }, []);

  if (!updated && !isSSR) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        dispatch,
        getState: appStore.getState,
        resetState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
