/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Secure from '../../utils/SecureLs';
import Keys from '../../utils/keys';

const initialState = {
  theme: (Secure.get(Keys.APP_THEME_KEY) === 'light' || 'dark') || 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'system';
      Secure.set(Keys.APP_THEME_KEY, state.theme);
    },

    setTheme(state, action) {
      state.theme = action.payload;
      Secure.set(Keys.APP_THEME_KEY, state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
