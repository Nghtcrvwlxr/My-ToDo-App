import React, { FC, useState } from "react";

import { validateLoginDetails } from "../store/slices/login-form-slice";
import { useTypedDispatch, useTypedSelector } from "../store/utils";

export const LoginPage: FC = () => {
  const dispatch = useTypedDispatch();

  const loginData = useTypedSelector((state) => state.loginFormReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEmail(event.target.value);
  };
  const onPasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  let emailInputClass = "";
  let emailNote = "";
  let passwordInputClass = "";
  let passwordNote = "";

  if (!loginData.emailValid) {
    emailInputClass = "invalid";
    emailNote = "(email is invalid)";
  }
  if (!loginData.passwordValid) {
    passwordInputClass = "invalid";
    passwordNote = "(password is invalid)";
  }

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(validateLoginDetails({ email, password }));
    setEmail("");
    setPassword("");
  };

  if (loginData.isLoggedIn) {
    return <h3 className="center-align">Welcome, {loginData.username}</h3>;
  }

  return (
    <>
      <h3 className="center-align">Login Page</h3>
      <div className="row">
        <form className="col s12" onSubmit={onFormSubmit}>
          <div className="container">
            <div className="input-field col s12">
              <input
                className={emailInputClass}
                placeholder="Enter your email"
                id="email"
                type="email"
                value={email}
                onChange={onEmailInputChange}
              />
              <label className="active" htmlFor="email">
                Email {emailNote}
              </label>
            </div>
            <div className="input-field col s12">
              <input
                className={passwordInputClass}
                placeholder="Enter your password"
                id="password"
                type="password"
                value={password}
                onChange={onPasswordInputChange}
              />
              <label className="active" htmlFor="password">
                Password {passwordNote}
              </label>
            </div>
            <button className="btn" type="submit" name="action">
              Login
              <i className="material-icons right">chevron_right</i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
