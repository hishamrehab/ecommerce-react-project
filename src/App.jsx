import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/1-header/Header";
import { BrowserRouter , Route ,  Router } from "react-router-dom";
import Main from "./components/3-main/Main";
import Products from "./components/3-main/Products";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
