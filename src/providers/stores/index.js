import React, { createContext } from "react";
import AuthStore from "./Authentication";
import AppStore from "./Application";
export const StoreContext = createContext();

export const StoreMainProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;

export default ({ children }) => {
  // const { state: authState, updatetoken, dispatch: authDisptch } = AuthStore();
  const authStore = AuthStore();
  // const { state: appState, dispatch: appDispatch } = AppStore();
  const appStore = AppStore();

  const StoreValue = {
    auth: authStore,
    app: appStore,
  };
  return <StoreMainProvider value={StoreValue}>{children}</StoreMainProvider>;
};
