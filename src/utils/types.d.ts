import { PaletteMode } from "@mui/material";

export interface TodoListState {
  mode: PaletteMode;
  filter: string;
  search: string;
  data: TodoListElementTemplate[];
}

export interface LoginFormState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  username: string;
  emailValid: boolean;
  passwordValid: boolean;
  formValid: boolean;
}

export interface StatusButtonTemplate {
  label: string;
  key: string;
}

export interface TodoListElementTemplate {
  id: number;
  label: string;
  important: boolean;
  done: boolean;
}

export interface TodoListElementProps {
  id: number;
  label: string;
  important: boolean;
  done: boolean;
}
