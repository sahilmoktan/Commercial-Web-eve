import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: "",
  password: "",
  token: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state, actions) => {
      const { email, password, token } = actions.payload;
      state.email = email;
      state.password = password;
      state.token = token;
    },
    setLogout: (state) => {
      state.email = null;
      state.password = null;
      state.token = null;
    },
  },
});

export const { setCredentials, setLogout } = userSlice.actions;

export default userSlice.reducer;
