import React, { FC } from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../store/utils";

export const AppFooter: FC = () => {
  const isLogged = useTypedSelector(
    (state) => state.loginFormReducer.isLoggedIn
  );
  const username = useTypedSelector((state) => state.loginFormReducer.username);

  const userDetails = () => {
    if (isLogged) {
      if (username === "aleks") {
        return "Welcome back, Aleks!";
      }
      return "Unknown user";
    }
    return "Please login to get access to Information page";
  };

  return (
    <Footer className="page-footer teal lighten-1">
      <span>{userDetails()}</span>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  margin-top: 3rem;
  padding: 1.5rem 5rem;
  height: 5rem;
  font-size: 1.5rem;
`;
