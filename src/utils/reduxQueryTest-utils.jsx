import React, { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  ThemeContext,
  themes,
} from "../context/theme";
import PropTypes from 'prop-types';
import { BrowserRouter } from "react-router-dom";
import { musicApi } from '../api/musicApi'
import authReducer from '../store/slices/authSlice'
import filterReducer from '../store/slices/filterSlice'
import searchReducer from '../store/slices/searchSlice'
import playerReducer from '../store/slices/playerSlice'
import playlistsReducer from '../store/slices/playlistSlice'


const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
    </BrowserRouter>
  );
};

// /––
//  * Обертка, предоставляющая store дочерним компонентам
//  */
export function withStoreProvider(store) {
  // eslint-disable-next-line react/prop-types
  return function Wrapper({ children }) {
    return (  
    <AllProviders>
    <Provider store={store}>{children}</Provider>
  </AllProviders>
    )
  };
}

/**
 * Функция для мока api
 * @link https://github.com/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/helpers.tsx#L170
 */
export const setupApiStore = (api, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: {[musicApi.reducerPath]: musicApi.reducer,
        auth: authReducer,
        filter: filterReducer,
        player: playerReducer,
        playlists: playlistsReducer,
        search: searchReducer, },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(musicApi.middleware),
        
    });

  const initialStore = getStore();
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  };

  let cleanupListeners;

  beforeEach(() => {
    const store = getStore();
    refObj.store = store;
    refObj.wrapper = withStoreProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.store.dispatch(api.util.resetApiState());
  });

  return refObj;
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

AllProviders.propTypes = {
    children: PropTypes.element
    };
