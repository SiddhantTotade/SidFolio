import Router from "./Router";
import Cursor from "~/features/components/common/Cursor";
import { ThemeProvider } from "@mui/material";
import { GlobalTheme } from "./Theme";

export default function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router />
      <Cursor />
    </ThemeProvider>
  );
}
