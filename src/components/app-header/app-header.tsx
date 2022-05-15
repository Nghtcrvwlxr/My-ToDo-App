import React, { FC } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { AppBar, Toolbar } from "@mui/material";

import { useTypedSelector } from "../../store/utils";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import { ThemeModeSwitch } from "../theme-mode-switch/theme-mode-switch";

export const AppHeader: FC = () => {
  const todoData = useTypedSelector((state) => state.todoListReducer.data);

  const doneCount = todoData.filter((element) => element.done).length;
  const todoCount = todoData.filter((element) => !element.done).length;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo>
          <HeaderIcon />
          <HeaderLink to="/">
            <Title>My To-Do List</Title>
          </HeaderLink>
        </Logo>
        <Counter>
          {doneCount} Done, {todoCount} more to do
        </Counter>
        <ThemeModeSwitch />
        <NavigationMenu />
      </Toolbar>
    </AppBar>
  );
};

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  width: auto;
`;

const HeaderIcon = styled(FormatListBulletedIcon)`
  font-size: 35px;
  margin: 0.5rem;
  @media (max-width: 768px) {
    font-size: 25px;
    margin: 0;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Title = styled.h1`
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
  @media (max-width: 600px) {
    margin: 0 0.5rem;
  }
`;

const Counter = styled.span`
  font-weight: bold;
  margin: 0 1rem;
  @media (max-width: 768px) {
    margin: 0 0.5rem;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    margin: 0 0.25rem;
    font-size: 10px;
  }
`;
