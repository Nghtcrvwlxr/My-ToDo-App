import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import { loadData } from "../../store/slices/todo-list-slice";
import { useTypedDispatch, useTypedSelector } from "../../store/utils";
import { TodoListItem } from "../../utils/types";
import { AppFooter } from "../app-footer/app-footer";
import { AppHeader } from "../app-header/app-header";
import { InfoPage } from "../pages/info-page";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";

export const App: FC = () => {
  const dispatch = useTypedDispatch();

  const todoData = useTypedSelector((state) => state.todoListReducer.data);

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("savedData") || "[]"
    ) as TodoListItem[];
    dispatch(loadData(savedData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <Application>
      <AppHeader />
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route
              path="*"
              element={
                <h3 className="center-align">This page does not exist</h3>
              }
            />
          </Routes>
        </Container>
      </Main>
      <AppFooter />
    </Application>
  );
};

const Application = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;
`;

const Main = styled.main`
  flex: 1 0 auto;
`;
