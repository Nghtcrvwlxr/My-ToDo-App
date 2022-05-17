import React from "react";

import styled from "@emotion/styled";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, PaletteMode } from "@mui/material";

import { toggleThemeMode } from "../../store/slices/todo-list-slice";
import { useTypedSelector, useTypedDispatch } from "../../store/utils";

export const ThemeModeSwitch = () => {
  const dispatch = useTypedDispatch();
  const themeMode = useTypedSelector(state => state.todoListReducer.mode);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(toggleThemeMode());
      },
    }),
    [dispatch],
  );

  const iconElement = (mode: PaletteMode) =>
    mode === "light" ? (
      <LightModeIcon fontSize="inherit" />
    ) : (
      <DarkModeIcon fontSize="inherit" />
    );

  return (
    <ModeSwitchButton
      aria-label="mode-switch"
      color="inherit"
      onClick={colorMode.toggleColorMode}
    >
      {iconElement(themeMode)}
    </ModeSwitchButton>
  );
};

const ModeSwitchButton = styled(IconButton)`
  padding: 4px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
  }
`;
