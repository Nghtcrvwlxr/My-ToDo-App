import { PaletteMode, PaletteOptions } from "@mui/material";

const lightModePalette: PaletteOptions = {
  primary: {
    main: "#d500f9",
  },
  secondary: {
    main: "#009688",
  },
  info: {
    main: "#00e5ff",
  },
};

const darkModePalette: PaletteOptions = {
  primary: {
    main: "#121212",
  },
  secondary: {
    main: "#424242",
  },
  info: {
    main: "#757575",
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          ...lightModePalette,
        }
      : {
          ...darkModePalette,
        }),
  },
});
