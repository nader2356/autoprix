import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Router from "./Route/router";
import { useRoutes } from "react-router-dom/dist";

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

     
    </ThemeProvider>
  );
}

export default App;
