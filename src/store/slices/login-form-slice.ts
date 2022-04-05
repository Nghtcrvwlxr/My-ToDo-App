import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginFormState } from "../../utils/types";

const initialState: LoginFormState = {
  isLoggedIn: false,
  username: "",
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
  formValid: false,
};

const loginFormSlice = createSlice({
  name: "loginFormReducer",
  initialState,
  reducers: {
    validateLoginDetails(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.emailValid = !!state.email.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      state.passwordValid = state.password.length >= 6;
      state.formValid = state.emailValid && state.passwordValid;
      state.isLoggedIn = state.formValid;

      if (state.isLoggedIn) {
        if (
          state.email === "aleks@mytodoapp.com" &&
          state.password === "password"
        ) {
          state.username = "aleks";
        } else {
          state.username = "guest";
        }
      }
    },
  },
});

export const { reducer: loginFormReducer } = loginFormSlice;

export const { validateLoginDetails } = loginFormSlice.actions;
