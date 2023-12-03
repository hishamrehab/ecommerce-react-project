import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/1-header/Header";
// import { BrowserRouter , Route ,  Router } from "react-router-dom";
import Category from "./components/3-main/Category";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
       <Category />
    
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
