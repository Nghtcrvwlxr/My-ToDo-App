import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Button, useTheme } from "@mui/material";

import { clearLoginDetails } from "../../store/slices/login-form-slice";
import { useTypedSelector, useTypedDispatch } from "../../store/utils";
import { NavigationMenuMobile } from "./navigation-menu-mobile";

export const NavigationMenu = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const isLoggedIn = useTypedSelector(
    state => state.loginFormReducer.isLoggedIn,
  );

  const loginButtonLabel = isLoggedIn ? "Logout" : "Login";
  const loginButtonPath = isLoggedIn ? "/" : "login";

  const loginButtonClickHandler = () => {
    if (isLoggedIn) {
      dispatch(clearLoginDetails());
    }
  };

  return (
    <>
      <Nav>
        <NavigationLink to="info" tabIndex={-1}>
          <NavigationButton
            variant="contained"
            disableElevation
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.info.main,
              },
            }}
          >
            Information
          </NavigationButton>
        </NavigationLink>
        <NavigationLink to={loginButtonPath} tabIndex={-1}>
          <NavigationButton
            variant="contained"
            disableElevation
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.info.main,
              },
            }}
            onClick={loginButtonClickHandler}
          >
            {loginButtonLabel}
          </NavigationButton>
        </NavigationLink>
      </Nav>
      <NavigationMenuMobile
        loginButtonLabel={loginButtonLabel}
        loginButtonPath={loginButtonPath}
        onClickFn={loginButtonClickHandler}
      />
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavigationLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const NavigationButton = styled(Button)`
  padding: 0 1rem;
  border: none;
  border-radius: 0;
  height: 64px;
  transition: 0.5s all;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.15)
  );
  @media (max-width: 1024px) {
    padding: 0 0.5rem;
  }
`;
