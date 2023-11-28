import {
  configureStore,
} from '@reduxjs/toolkit';

import themeReducer from '../theme/themeSlice';
import authSReducer from '../features/Auth/AuthSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      theme: themeReducer,
      auth: authSReducer,
    },
  });
}

const store = makeStore();

export default store;
