import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import styled from "@emotion/styled";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { AppFooter } from "../components/app-footer/app-footer";
import { AppHeader } from "../components/app-header/app-header";
import { NotFoundIndicator } from "../components/not-found-indicator/not-found-indicator";
import { InfoPage } from "../pages/info-page";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";
import { loadData } from "../store/slices/todo-list-slice";
import { useTypedDispatch, useTypedSelector } from "../store/utils";
import { getDesignTokens } from "../theme/theme";
import { TodoListElementTemplate } from "../utils/types";

export const App: FC = () => {
  const dispatch = useTypedDispatch();
  const todoData = useTypedSelector(state => state.todoListReducer.data);
  const mode = useTypedSelector(state => state.todoListReducer.mode);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("savedData") || "[]",
    ) as TodoListElementTemplate[];
    dispatch(loadData(savedData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Application>
        <AppHeader />
        <Main>
          <Container>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="*" element={<NotFoundIndicator />} />
            </Routes>
          </Container>
        </Main>
        <AppFooter />
      </Application>
    </ThemeProvider>
  );
};

const Application = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 80px auto 0 auto;
  padding: 0 1rem;
  @media (min-width: 2000px) {
    max-width: 1200px;
  }
  @media (max-width: 600px) {
    margin: 70px auto 0 auto;
  }
`;

const Main = styled.main`
  flex: 1 0 auto;
`;
