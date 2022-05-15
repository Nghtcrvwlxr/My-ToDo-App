import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, Fade, MenuItem } from "@mui/material";

export const NavigationMenuMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MobileNavigationLink to="login" tabIndex={-1}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
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
