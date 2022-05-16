import { PaletteMode } from "@mui/material";

export interface TodoListState {
  mode: PaletteMode;
  filter: string;
  search: string;
  data: TodoListElementTemplate[];
}

export interface LoginFormState {
  isLoggedIn: boolean;
  username: string;
  emailValid: boolean;
  passwordValid: boolean;
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
