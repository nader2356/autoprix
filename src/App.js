import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Router from "./Route/router";
import { useRoutes } from 'react-router-dom'


function App() {
  const routes = useRoutes(Router);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {routes}
    </ThemeProvider>
  );
}

export default App;
