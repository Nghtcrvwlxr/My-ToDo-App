import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginFormState } from "../../utils/types";

const initialState: LoginFormState = {
  isLoggedIn: false,
  username: "",
  emailValid: true,
  passwordValid: true,
};

const loginFormSlice = createSlice({
  name: "loginFormReducer",
  initialState,
  reducers: {
    validateLoginDetails(
      state,
      {
        payload: { email, password },
      }: PayloadAction<{ email: string; password: string }>,
    ) {
      state.emailValid = !!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      state.passwordValid = password.length >= 5 && !/\s/.test(password);
      state.isLoggedIn = state.emailValid && state.passwordValid;

      if (state.isLoggedIn) {
        if (email === "aleks@mytodoapp.com" && password === "password") {
          state.username = "Aleks";
        } else {
          state.username = "Guest";
        }
      }
    },
    clearLoginDetails() {
      return initialState;
    },
  },
});

export const { reducer: loginFormReducer } = loginFormSlice;

export const { validateLoginDetails, clearLoginDetails } =
  loginFormSlice.actions;
