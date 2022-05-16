import React, { FC } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, Fade, MenuItem } from "@mui/material";

import { useTypedSelector } from "../../store/utils";

interface NavigationMenuMobileProps {
  loginButtonLabel: string;
  loginButtonPath: string;
  onClickFn: () => void;
}

export const NavigationMenuMobile: FC<NavigationMenuMobileProps> = ({
  loginButtonLabel,
  loginButtonPath,
  onClickFn,
}) => {
  const isLoggedIn = useTypedSelector(
    (state) => state.loginFormReducer.isLoggedIn
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginButtonClickHandler = () => {
    handleClose();
    if (isLoggedIn) {
      onClickFn();
    }
  };

  return (
    <MobileMenu>
      <IconButton
        id="fade-button"
        color="inherit"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MobileMenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MobileNavigationLink to="info" tabIndex={-1}>
          <MenuItem onClick={handleClose}>Information</MenuItem>
        </MobileNavigationLink>
        <MobileNavigationLink to={loginButtonPath} tabIndex={-1}>
          <MenuItem onClick={loginButtonClickHandler}>
            {loginButtonLabel}
          </MenuItem>
        </MobileNavigationLink>
      </Menu>
    </MobileMenu>
  );
};

const MobileMenu = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuIcon = styled(MenuIcon)`
  font-size: 30px;
  @media (max-width: 425px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

const MobileNavigationLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
