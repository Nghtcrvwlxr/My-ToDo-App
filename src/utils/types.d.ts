export interface TodoListState {
  filter: string;
  search: string;
  data: TodoListItem[];
}

export interface TodoListItem {
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

export interface LoginFormState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  username: string;
  emailValid: boolean;
  passwordValid: boolean;
  formValid: boolean;
}

export interface Button {
  label: string;
  key: string;
}
