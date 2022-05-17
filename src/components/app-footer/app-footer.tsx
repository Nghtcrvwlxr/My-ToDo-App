import React, { FC } from "react";

import styled from "@emotion/styled";
import { Box, useTheme } from "@mui/material";

import { useTypedSelector } from "../../store/utils";

export const AppFooter: FC = () => {
  const theme = useTheme();
  const isLogged = useTypedSelector(state => state.loginFormReducer.isLoggedIn);
  const username = useTypedSelector(state => state.loginFormReducer.username);

  const userDetails = () => {
    if (isLogged) {
      if (username === "Aleks") {
        return "Welcome back, Aleks!";
      }
      return "Welcome, Guest";
    }
    return "Please login to get access to the Information page";
  };

  return (
    <Footer
      component="footer"
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <span>{userDetails()}</span>
    </Footer>
  );
};

const Footer = styled(Box)`
  margin-top: 1.5rem;
  padding: 1.5rem 3rem;
  font-size: 20px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-size: 15px;
  }
  @media (max-width: 425px) {
    padding: 1rem;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 1rem 0.5rem;
    font-size: 12px;
  }
`;
