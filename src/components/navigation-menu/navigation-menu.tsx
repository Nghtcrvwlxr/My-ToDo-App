import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Button, useTheme } from "@mui/material";

import { NavigationMenuMobile } from "./navigation-menu-mobile";

export const NavigationMenu = () => {
  const theme = useTheme();

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
        <NavigationLink to="login" tabIndex={-1}>
          <NavigationButton
            variant="contained"
            disableElevation
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.info.main,
              },
            }}
          >
            Login
          </NavigationButton>
        </NavigationLink>
      </Nav>
      <NavigationMenuMobile />
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
`;
