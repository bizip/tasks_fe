/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../../api/api';

export const register = createAsyncThunk('Register', async (data) => {
  try {
    const res = await API.post('auth/register', data);
    return res;
  } catch (error) {
    throw error?.response?.data;
  }
});

export const login = createAsyncThunk('Login', async (data) => {
  try {
    return await API.post('auth/login', data);
  } catch (error) {
    throw error?.response?.data;
  }
});

const initialState = {
  loading: false,
  error: null,
  data: null,
  isLogging: false,
  loaginError: null,
  loaginData: null,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload.data.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.isLogging = true;
        state.loaginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogging = false;
        state.loaginError = null;
        state.loginData = action.payload.data.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLogging = false;
        state.loaginError = action.error.message;
      });
  },
});

export default authSlice.reducer;
