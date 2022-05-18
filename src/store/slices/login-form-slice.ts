import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginFormState {
  isLoggedIn: boolean;
  username: string;
  emailValid: boolean;
  passwordValid: boolean;
}

type LoginDetails = {
  email: string;
  password: string;
};

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
      { payload: { email, password } }: PayloadAction<LoginDetails>,
    ) {
      state.emailValid = /^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i.test(email);
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
    clearError(state, action: PayloadAction<string>) {
      if (action.payload === "email" && !state.emailValid) {
        state.emailValid = true;
      } else if (action.payload === "password" && !state.passwordValid) {
        state.passwordValid = true;
      }
    },
    clearLoginDetails() {
      return initialState;
    },
  },
});

export const { reducer: loginFormReducer } = loginFormSlice;

export const { validateLoginDetails, clearError, clearLoginDetails } =
  loginFormSlice.actions;
