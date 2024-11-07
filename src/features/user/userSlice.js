import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: 'wdfaker',
  },
  theme: 'dracula',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {

    },
    logotUser: (action) => {

    },
    toggleTheme: (state) => {

    },
  }
});

export const { loginUser, logotUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;