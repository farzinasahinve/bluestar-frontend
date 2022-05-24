import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
const initialState = {
  user: {},
  token: '',
  status: 'idle',
};
var BASE_URL  = 'https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/login';

// typically used to make async requests.
export const loginAsync = createAsyncThunk(
  'login',
  async (loginData) => {
      const response = await axios.post(BASE_URL, loginData)
      return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.data;
        state.token = action.payload.token;
        localStorage.setItem('token',action.payload.token)
      });
  },
});
// get reducer data
export const selectUser = (state) => state.auth;
export default loginSlice.reducer;
