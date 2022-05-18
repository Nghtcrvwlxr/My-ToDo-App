import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, TextField, Button, useTheme } from "@mui/material";

import {
  validateLoginDetails,
  clearError,
} from "../../store/slices/login-form-slice";
import { useTypedDispatch, useTypedSelector } from "../../store/utils";

export const LoginForm: FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const loginData = useTypedSelector(state => state.loginFormReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let emailNote = "Enter your email";
  let passwordNote = "Enter your password";

  if (!loginData.emailValid) {
    emailNote = "(email is invalid)";
  }
  if (!loginData.passwordValid) {
    passwordNote = "(password is invalid)";
  }

  useEffect(() => {
    if (!loginData.emailValid) {
      setEmail("");
    }
    if (!loginData.passwordValid) {
      setPassword("");
    }
  }, [loginData.emailValid, loginData.passwordValid]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (loginData.isLoggedIn) {
      timeout = setTimeout(() => {
        navigate("/info");
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [loginData.isLoggedIn, navigate]);

  const onEmailInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    setEmail(event.target.value);
  };
  const onPasswordInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    setPassword(event.target.value);
  };

  const focusHandler: React.FocusEventHandler<HTMLInputElement> = event => {
    dispatch(clearError(event.target.type));
  };

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    dispatch(validateLoginDetails({ email, password }));
  };

  if (loginData.isLoggedIn) {
    return <LoginFormTitle>Login successful</LoginFormTitle>;
  }
  return (
    <>
      <LoginFormTitle>Login</LoginFormTitle>
      <Box component="form" autoComplete="off" onSubmit={onFormSubmit}>
        <Wrapper>
          <LoginFormInput
            id="email-input"
            label="Email"
            variant="outlined"
            color="secondary"
            type="email"
            error={!loginData.emailValid}
            helperText={emailNote}
            fullWidth
            value={email}
            onChange={onEmailInputChange}
            onFocusCapture={focusHandler}
          />
          <LoginFormInput
            id="password-input"
            helperText={passwordNote}
            label="Password"
            variant="outlined"
            color="secondary"
            type="password"
            error={!loginData.passwordValid}
            fullWidth
            value={password}
            onChange={onPasswordInputChange}
            onFocusCapture={focusHandler}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            name="login"
            endIcon={<ChevronRightIcon />}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.info.main,
              },
            }}
          >
            Login
          </Button>
        </Wrapper>
      </Box>
    </>
  );
};

const LoginFormTitle = styled.h3`
  text-align: center;
  margin: 0.5rem auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
`;

const LoginFormInput = styled(TextField)`
  margin: 0.5rem 0;
`;
