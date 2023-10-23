import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // userInfo: localStorage.getItem('userInfo')
  //   ? JSON.parse(localStorage.getItem('userInfo'))
  //   : null,
  // userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = null;
      state.nodes = null;
    },
    setNodes : (state, action) => {
      state.nodes = action.payload;
    },
  },
});

export const { setCredentials, logout, setNodes } = authSlice.actions;

export default authSlice.reducer;
