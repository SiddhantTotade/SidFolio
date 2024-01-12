import { createTheme } from "@mui/material";

export const GlobalTheme = createTheme({
  typography: {
    fontFamily: ["Diphylleia", "serif"].join(","),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#000000",
          textDecoration: "none",
          cursor: "pointer",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
